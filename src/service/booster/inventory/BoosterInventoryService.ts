import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {BoosterService, IBoosterInventoryService} from "@/puff-smith/service/booster";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const BoosterInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IBoosterInventoryService => {
	const service: IBoosterInventoryService = {
		...AbstractRepositoryService<IBoosterInventoryService>(prismaClient, prismaClient.boosterInventory, async boosterTransaction => {
			const boosterService = BoosterService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(boosterTransaction.transactionId);
			return {
				...boosterTransaction,
				booster: await boosterService.toMap(boosterTransaction.boosterId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const booster = await BoosterService(prisma).toMap(create.boosterId);
			return TransactionService(prisma).handleTransaction(create.userId, booster.cost, async transaction => prisma.boosterInventory.create({
				data: {
					boosterId: booster.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}), `Purchase of booster [${booster.vendor.name} ${booster.name}]`);
		}),
	};

	return service;
}
