import {IQuery, IRepositoryService} from "@leight-core/api";
import {Prisma, Vendor} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IVendorCreate {
	name: string;
}

export interface IVendorQuery extends IQuery<Prisma.VendorWhereInput, Prisma.VendorOrderByWithRelationInput> {
}

export interface IVendor {
	id: string;
	name: string;
}

export interface IVendorFetchProps {
	vendor: IVendor;
}

export interface IVendorFetchQuery extends ParsedUrlQuery {
	vendorId: string;
}

export type IVendorService = IRepositoryService<IVendorCreate, Vendor, IVendor, IVendorQuery, IVendorFetchProps, IVendorFetchQuery>;
