import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {
	IToken,
	ITokenEntity,
	ITokenSource
}                        from "@/puff-smith/service/token/interface";
import {
	IWithIdentity,
	pageOf,
	SourceInfer,
	UndefinableOptional
}                        from "@leight-core/viv";

export class TokenSourceClass extends ContainerSource<ITokenSource> implements ITokenSource {
	constructor() {
		super("token");
	}

	async toItem(token: SourceInfer.Entity<ITokenSource>): Promise<SourceInfer.Item<ITokenSource>> {
		return token;
	}

	async $count({filter: {fulltext, ...filter} = {}}: SourceInfer.Query<ITokenSource>): Promise<number> {
		return this.container.prisma.token.count({
			where: {
				name: {
					contains: fulltext,
					mode:     "insensitive",
				},
			},
		});
	}

	async $query({filter: {fulltext, ...filter} = {}, orderBy, ...query}: SourceInfer.Query<ITokenSource>): Promise<SourceInfer.Entity<ITokenSource>[]> {
		return this.container.prisma.token.findMany({
			where: {
				name: {
					contains: fulltext,
					mode:     "insensitive",
				},
			},
			orderBy,
			...pageOf(query),
		});
	}

	async $create({name}: SourceInfer.Create<ITokenSource>): Promise<SourceInfer.Entity<ITokenSource>> {
		return this.container.prisma.token.create({
			data: {
				name,
			},
		});
	}

	async resolveId({name}: SourceInfer.Create<ITokenSource>): Promise<IWithIdentity> {
		return this.container.prisma.token.findFirstOrThrow({
			where: {
				name,
			},
		});
	}

	async $patch({id}: UndefinableOptional<SourceInfer.Create<ITokenSource>> & IWithIdentity): Promise<SourceInfer.Entity<ITokenSource>> {
		return this.container.prisma.token.findFirstOrThrow({
			where: {id},
		});
	}

	async fetchByNames(tokens: string[] | string): Promise<ITokenEntity[]> {
		const $names = Array.isArray(tokens) ? tokens : tokens.split(/,\s*/ig).map(tokens => `${tokens}`.toLowerCase());
		return this.container.prisma.token.findMany({
			where: {
				OR: [
					{name: {in: $names}},
					{id: {in: $names}},
				],
			}
		});
	}

	async tokensOf(userId: string): Promise<IToken[]> {
		return this.mapper.toItem.list(this.container.prisma.token.findMany({
			where: {
				UserToken: {
					every: {
						userId,
					}
				}
			}
		}));
	}
}

export const TokenSource = () => new TokenSourceClass();
