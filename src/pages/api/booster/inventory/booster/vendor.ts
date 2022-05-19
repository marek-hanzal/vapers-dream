import {defaults} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Vendor", IQuery, IVendor>(async ({toUserId}) => {
	const vendorService = VendorRepository(defaults(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.boosterInventory.findMany({
		where: {
			userId: toUserId(),
		},
		orderBy: [
			{booster: {vendor: {name: "asc"}}},
		],
		include: {
			booster: {
				include: {
					vendor: true,
				}
			}
		}
	})).map(async ({booster: item}) => await vendorService.map(item.vendor))), ["id"]) as IVendor[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
