import {ITransaction, ITransactions} from "@/puff-smith/service/transaction/interface";
import {Transaction} from "@prisma/client";
import prismaClient from "@/puff-smith/service/prisma";

export const transactionListMapper = async (transactions: ITransactions) => await Promise.all((await transactions).map(transactionMapper));

export const transactionMapper = async (transaction: Transaction): Promise<ITransaction> => {
	return {
		...transaction,
		amount: transaction.amount.toNumber(),
	};
}

export const transactionFetch = async (transactionId: string) => prismaClient.transaction.findUnique({
	where: {
		id: transactionId,
	},
	rejectOnNotFound: true,
})

export const transactionRequire = async (transactionId: string) => (await transactionFetch(transactionId))!!;
