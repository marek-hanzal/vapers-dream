import {ContainerClass} from "@/puff-smith/service/Container";
import {
	IQuery,
	ISource
}                       from "@leight-core/viv";
import {
	Prisma,
	UserToken
}                       from "@prisma/client";

export interface IUserTokenCreate {
	userId: string;
	tokenId: string;
}

export interface IUserTokenQuery extends IQuery<Prisma.UserTokenWhereInput, Prisma.UserTokenOrderByWithRelationInput> {
}

export type IUserTokenEntity<T = void> = T extends void ? UserToken : UserToken & T;
export type IWithUserToken<T = void> = { UserToken: IUserTokenEntity<T>[]; };
export type IWithNullUserToken<T = void> = { UserToken?: IUserTokenEntity<T>[] | null; };

export interface IUserToken {
	id: string;
	userId: string;
	tokenId: string;
}

export interface IUserTokenSource extends ISource<//
	ContainerClass,
	IUserTokenEntity,
	IUserToken,
	IUserTokenQuery,
	IUserTokenCreate> {
}
