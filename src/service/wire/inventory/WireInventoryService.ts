import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IWireInventoryService, IWireInventoryServiceCreate} from "@/puff-smith/service/wire/inventory/interface";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const WireInventoryService = (request: IWireInventoryServiceCreate): IWireInventoryService => {
	const wireService = singletonOf(() => WireService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...RepositoryService<IWireInventoryService>({
			name: "wire-inventory",
			source: request.prisma.wireInventory,
			mapper: async wireTransaction => ({
				...wireTransaction,
				wire: await wireService().toMap(wireTransaction.wireId),
				transaction: await transactionService().toMap(wireTransaction.transactionId),
			}),
			create: async ({code, ...wireInventory}) => prisma.$transaction(async prisma => {
				const wire = await WireService({...request, prisma}).toMap(wireInventory.wireId);
				return TransactionService({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: wire.cost,
					note: `Purchase of wire [${wire.vendor.name} ${wire.name}]`,
					callback: async transaction => prisma.wireInventory.create({
						data: {
							code: code || codeService().code(),
							wireId: wire.id,
							transactionId: transaction.id,
							userId: userId(),
						}
					}),
				});
			}),
		}),
		handleDelete: async ({request: {ids}}) => {
			const where = {
				id: {
					in: ids,
				},
				userId: userId(),
			};
			return prisma.$transaction(async prisma => {
				const wireInventory = await WireInventoryService({...request, prisma}).list(prisma.wireInventory.findMany({where}));
				await prisma.wireInventory.deleteMany({
					where,
				});
				return wireInventory;
			});
		},
	};
};
