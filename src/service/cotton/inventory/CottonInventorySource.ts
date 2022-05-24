import {CodeService} from "@/puff-smith/service/code/CodeService";
import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonInventorySource = (): ICottonInventorySource => {
	const cottonSource = singletonOf(() => CottonSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: ICottonInventorySource = Source<ICottonInventorySource>({
		name: "cotton.inventory",
		prisma,
		map: async cottonTransaction => ({
			...cottonTransaction,
			cotton: await cottonSource().mapper.map(cottonTransaction.cotton),
			transaction: await transactionSource().mapper.map(cottonTransaction.transaction),
		}),
		source: {
			create: async ({code, ...cotton}) => prisma.$transaction(async prisma => {
				const userId = source.user.required();
				const cottonSource = CottonSource();
				const transactionSource = TransactionSource();
				cottonSource.withPrisma(prisma);
				transactionSource.withPrisma(prisma);

				const $cotton = await cottonSource.get(cotton.cottonId);
				return transactionSource.handleTransaction({
					userId,
					cost: $cotton.cost,
					note: `Purchase of cotton [${$cotton.vendor.name} ${$cotton.name}]`,
					callback: async transaction => prisma.cottonInventory.create({
						data: {
							code: code || codeService().code(),
							cottonId: $cotton.id,
							transactionId: transaction.id,
							userId,
						},
						include: {
							cotton: {
								include: {
									vendor: true,
								}
							},
							transaction: true,
						},
					}),
				});
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const cottonInventory = await prisma.cottonInventory.findMany({
						where,
						include: {
							cotton: {
								include: {
									vendor: true,
								}
							},
							transaction: true,
						},
					});
					await prisma.cottonInventory.deleteMany({
						where,
					});
					return cottonInventory;
				});
			},
		}
	});

	return source;
};
