import {ServiceCreate} from "@/puff-smith/service";
import {CottonMarketService} from "@/puff-smith/service/cotton/market/CottonMarketService";
import {ICottonMarket, ICottonMarketQuery} from "@/puff-smith/service/cotton/market/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonsMarket", ICottonMarketQuery, ICottonMarket>(async ({request, toUserId}) => CottonMarketService(ServiceCreate(toUserId())).query(request), cache);
