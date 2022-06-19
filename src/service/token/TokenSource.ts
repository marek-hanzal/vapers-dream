import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITokenSource} from "@/puff-smith/service/token/interface";
import {onUnique, Source} from "@leight-core/server";

export const TokenSource = (): ITokenSource => {
	const source: ITokenSource = Source<ITokenSource>({
		name: "token",
		prisma,
		map: async token => token,
		source: {
			create: async token => {
				try {
					return await source.prisma.token.create({
						data: token,
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.token.findFirst({
						where: {
							name: token.name,
						},
						rejectOnNotFound: true,
					}));
				}
			}
		},
		tokensOf: userId => source.mapper.list(source.prisma.token.findMany({
			where: {
				UserToken: {
					every: {
						userId,
					}
				}
			}
		})),
	});

	return source;
};
