import {RequestEndpoint} from "@leight-core/server/lib/cjs/endpoint/endpoints";
import {ICheckRequest, ICheckResponse, TransactionService} from "@/puff-smith/service/transaction";

export default RequestEndpoint<"CheckPrice", Omit<ICheckRequest, "userId">, ICheckResponse>(async ({request, toUserId}) => TransactionService().check({
	userId: await toUserId(),
	...request,
}));
