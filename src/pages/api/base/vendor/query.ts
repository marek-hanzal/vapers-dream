import {ServiceCreate} from "@/puff-smith/service";
import {IBaseQuery} from "@/puff-smith/service/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IBaseQuery, IVendor>(async ({request: {filter}, toUserId}) => itemsOf(prisma.base.findMany({
	distinct: ["vendorId"],
	select: {
		vendor: true,
	},
	orderBy: [
		{
			vendor: {
				name: "asc",
			}
		}
	],
	where: {
		vendor: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			}
		}
	},
}), ({vendor}) => vendor, VendorService(ServiceCreate(toUserId())).map));
