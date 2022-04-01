import {QueryEndpoint} from "@leight-core/server";
import {AromaService, IAroma, IAromaQuery} from "@/puff-smith/service/aroma";

export default QueryEndpoint<"InventoryAromas", IAromaQuery, IAroma>(async ({request: {filter, ...request}, toUserId}) => AromaService().handleQuery({
	request: {
		...request,
		filter: {
			...filter,
			AromaInventory: {
				some: {
					userId: await toUserId(),
				}
			}
		}
	}
}));
