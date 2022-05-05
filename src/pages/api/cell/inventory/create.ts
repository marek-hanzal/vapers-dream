import {ServiceCreate} from "@/puff-smith/service";
import {CellInventoryService} from "@/puff-smith/service/cell/inventory/CellInventoryService";
import {ICellInventory, ICellInventoryCreate} from "@/puff-smith/service/cell/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", ICellInventoryCreate, ICellInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => {
		try {
			return await CellInventoryService(ServiceCreate(toUserId())).handleCreate({request});
		} finally {
			cache.clear();
		}
	})
);
