import {IServiceCreate} from "@/puff-smith/service";
import {IQuery, IRepositoryService, ITranslation} from "@leight-core/api";
import {Prisma, Translation} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ITranslationCreate {
	language: string;
	label: string;
	text: string;
}

export interface ITranslationQuery extends IQuery<Prisma.TranslationWhereInput, Prisma.TranslationOrderByWithRelationInput> {
}

export interface ITranslationFetchProps {
	translation: ITranslation;
}

export interface ITranslationFetchQuery extends ParsedUrlQuery {
	translationId: string;
}

export interface ITranslationServiceCreate extends IServiceCreate {
}

export interface ITranslationService extends IRepositoryService<ITranslationCreate, Translation, ITranslation, ITranslationQuery, ITranslationFetchProps, ITranslationFetchQuery> {
}
