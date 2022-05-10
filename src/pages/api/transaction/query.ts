import {ITransaction, ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Transaction", ITransactionQuery, ITransaction>(TransactionService().handleQuery);
