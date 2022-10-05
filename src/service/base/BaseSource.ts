import {IBaseEntity, IBaseSource} from "@/puff-smith/service/base/interface";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const BaseSource = () => new BaseSourceClass();

export class BaseSourceClass extends ContainerSource<IBaseSource> implements IBaseSource {
	constructor() {
		super("base", prisma);
	}

	async map(base: ISourceEntity<IBaseSource>): Promise<ISourceItem<IBaseSource>> {
		return {
			...base,
			nicotine: base.nicotine?.toNumber() || null,
		};
	}

	async updateKeywords(base: IBaseEntity): Promise<IBaseEntity> {
		return this.container.useKeywordSource(async keywordSource => {
			const $base = await this.map(base);
			// const source: string[] = [
			// 	$base.code,
			// 	$base.vendor.name,
			// 	$base.name,
			// 	...$base.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			// ];
			// (await this.prisma.translation.findMany({
			// 	where: {
			// 		label: {
			// 			in: $base.tastes.map(taste => `common.${taste.group}.${taste.tag}`),
			// 		},
			// 	}
			// })).map(({text}) => source.push(text));
			// await this.prisma.baseKeyword.deleteMany({
			// 	where: {baseId: base.id},
			// });
			// await this.prisma.baseKeyword.createMany({
			// 	data: await Promise.all(source.map(text => keywordSource.import({text})).map(async keyword => ({
			// 		baseId: base.id,
			// 		keywordId: (await keyword).id,
			// 	}))),
			// });
			return base;
		});
	}

	async $create(base: ISourceCreate<IBaseSource>): Promise<ISourceEntity<IBaseSource>> {
		return this.updateKeywords(await this.prisma.base.create({
			data: {
				...base,
				hash: sha256(JSON.stringify(base)),
			},
		}));
	}

	async $patch({id, ...base}: UndefinableOptional<ISourceCreate<IBaseSource>> & IWithIdentity): Promise<ISourceEntity<IBaseSource>> {
		return this.updateKeywords(await this.prisma.base.update({
			where: {id},
			data: base,
		}));
	}

	async createToId(base: ISourceCreate<IBaseSource>): Promise<{ id: string }> {
		return this.prisma.base.findFirstOrThrow({
			select: {
				id: true,
			},
			where: {
				hash: sha256(JSON.stringify(base)),
			},
		});
	}

	async $remove(ids: string[]): Promise<ISourceEntity<IBaseSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.base.findMany({
			where,
		});
		await this.prisma.base.deleteMany({
			where,
		});
		return items;
	}

	async $get(id: string): Promise<ISourceEntity<IBaseSource>> {
		return this.prisma.base.findUniqueOrThrow({
			where: {
				id,
			},
		});
	}

	async $query(query: ISourceQuery<IBaseSource>): Promise<ISourceEntity<IBaseSource>[]> {
		return this.prisma.base.findMany({
			where: this.withFilter(query),
			...pageOf(query),
		});
	}

	async $count(query: ISourceQuery<IBaseSource>): Promise<number> {
		return this.prisma.base.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter: {fulltext, ...filter} = {}}: ISourceQuery<IBaseSource>) {
		return merge(filter || {}, {
			AND: (fulltext?.toLowerCase()?.split(/\s+/gi) || []).map(fragment => ({
				BaseKeyword: {
					some: {
						keyword: {
							text: {
								contains: fragment,
								mode: "insensitive",
							},
						},
					},
				}
			})),
		});
	}
}
