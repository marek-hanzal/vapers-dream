import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaMarketSource = (): IAromaMarketSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IAromaMarketSource = Source<IAromaMarketSource>({
		name: "aroma.market",
		prisma,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.aroma.count({
				where: filter,
			}),
			query: async ({filter: {fulltext, ...filter} = {}, ...query}) => source.prisma.aroma.findMany({
				where: filter,
				include: {
					vendor: true,
					AromaTaste: {
						orderBy: [
							{taste: {sort: "asc"}},
						],
						include: {
							taste: true,
						},
					},
					AromaInventory: {
						where: {
							userId: source.user.required(),
						},
					},
				},
				...pageOf(query),
			}),
		},
		map: async aroma => aroma ? ({
			aroma: await aromaSource().mapper.map(aroma),
			isOwned: aroma.AromaInventory.length > 0,
		}) : undefined,
	});

	return source;
};
