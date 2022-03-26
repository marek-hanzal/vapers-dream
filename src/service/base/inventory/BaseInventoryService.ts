import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {BaseService, IBaseTransactionService} from "@/puff-smith/service/base";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const BaseInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IBaseTransactionService => {
	const service: IBaseTransactionService = {
		...AbstractRepositoryService<IBaseTransactionService>(prismaClient, prismaClient.baseInventory, async baseTransaction => {
			const baseService = BaseService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(baseTransaction.transactionId);
			return {
				...baseTransaction,
				base: await baseService.toMap(baseTransaction.baseId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const base = await BaseService(prisma).toMap(create.baseId);
			return TransactionService(prisma).handleTransaction(create.userId, base.cost, async transaction => prisma.baseInventory.create({
				data: {
					baseId: base.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}), `Purchase of base [${base.vendor.name} ${base.name}]`);
		}),
	};

	return service;
}
