import {ServiceCreate} from "@/puff-smith/service";
import {IBoosterQuery} from "@/puff-smith/service/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IBoosterQuery, IVendor>(async ({request: {filter}, toUserId}) => itemsOf(prisma.booster.findMany({
	distinct: ["vendorId"],
	orderBy: [
		{vendor: {name: "asc"}},
	],
	where: {
		vendor: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			}
		}
	},
	select: {
		vendor: true,
	}
}), ({vendor}) => vendor, VendorService(ServiceCreate(toUserId())).map));
