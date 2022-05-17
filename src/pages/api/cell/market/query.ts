import {defaults} from "@/puff-smith/service";
import {CellMarketService} from "@/puff-smith/service/cell/market/CellMarketService";
import {ICellMarket, ICellMarketQuery} from "@/puff-smith/service/cell/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellMarket", ICellMarketQuery, ICellMarket>(async ({request, toUserId}) => CellMarketService(defaults(toUserId())).query(request));
