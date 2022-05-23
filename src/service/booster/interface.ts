import {IServiceCreate} from "@/puff-smith/service";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWhereFulltext} from "@leight-core/api";
import {Booster, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBoosterCreate {
	name: string;
	code?: string;
	vendor: string;
	cost: number;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
}

export type IBoosterWhere = Prisma.BoosterWhereInput & IWhereFulltext;

export interface IBoosterQuery extends IQuery<IBoosterWhere, Prisma.BoosterOrderByWithRelationInput> {
}

export interface IBooster {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	cost: number;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
}

export interface IBoosterFetchProps {
	booster: IBooster;
}

export interface IBoosterFetchQuery extends ParsedUrlQuery {
	boosterId: string;
}

export interface IBoosterSourceCreate extends IServiceCreate {
}

export interface IBoosterSource extends ISource<IBoosterCreate, Booster, IBooster, IBoosterQuery, IBoosterFetchProps, IBoosterFetchQuery> {
}
