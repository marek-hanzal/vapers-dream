import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICottonSource} from "@/puff-smith/service/cotton/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonSource = (): ICottonSource => {
	const vendorSource = singletonOf(() => VendorSource());
	const tagSource = singletonOf(() => TagSource());
	const codeService = singletonOf(() => CodeService());

	const source: ICottonSource = Source<ICottonSource>({
		name: "cotton",
		prisma,
		map: async cotton => ({
			...cotton,
			vendor: await vendorSource().mapper.map(cotton.vendor),
			draws: await tagSource().mapper.list(source.prisma.tag.findMany({
				where: {
					CottonDraw: {
						some: {
							cottonId: cotton.id,
						}
					}
				}
			})),
		}),
		source: {
			create: async ({vendor, draws, code, ...cotton}) => {
				const create = {
					...cotton,
					code: code || codeService().code(),
					vendor: {
						connect: {
							name: vendor,
						}
					},
					CottonDraw: {
						createMany: {
							data: draws ? (await tagSource().fetchCodes(draws, "draw")).map(tag => ({
								drawId: tag.id,
							})) : [],
						}
					},
				};
				try {
					return await source.prisma.cotton.create({
						data: create,
						include: {
							vendor: true,
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $cotton = (await source.prisma.cotton.findFirst({
							where: {
								OR: [
									{
										name: create.name,
										vendor: {
											name: vendor,
										},
									},
									{
										code: create.code,
									}
								]
							},
							rejectOnNotFound: true,
						}));
						await source.prisma.cottonDraw.deleteMany({
							where: {
								cottonId: $cotton.id,
							}
						});
						return source.prisma.cotton.update({
							where: {
								id: $cotton.id,
							},
							data: create,
							include: {
								vendor: true,
							},
						});
					});
				}
			},
		},
	});

	return source;
};
