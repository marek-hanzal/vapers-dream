import {IServiceCreate} from "@/puff-smith/service";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Cell, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICellCreate {
	name: string;
	vendor: string;
	voltage: number;
	cost: number;
	drain?: number;
	ohm?: number;
	type: string;
}

export interface ICellQuery extends IQuery<Prisma.CellWhereInput, Prisma.CellOrderByWithRelationInput> {
}

export interface ICell {
	id: string;
	name: string;
	vendor: IVendor;
	vendorId: string;
	voltage: number;
	cost: number;
	drain?: number | null;
	ohm?: number | null;
	type: ITag;
	typeId: string;
}

export interface ICellFetchProps {
	cell: ICell;
}

export interface ICellFetchQuery extends ParsedUrlQuery {
	cellId: string;
}

export interface ICellServiceCreate extends IServiceCreate {
}

export interface ICellService extends IRepositoryService<ICellCreate, Cell, ICell, ICellQuery, ICellFetchProps, ICellFetchQuery> {
	fetchCells(cells: string): Promise<Cell[]>;
}
