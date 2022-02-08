import {ConsumerProps, FC} from "react";
import {
	createGetQuery,
	createPostQuery,
	FilterContextProvider,
	IFilterContextProviderProps,
	IQueryOptions,
	IQueryResult,
	IQuerySourceSelectProps,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	QuerySourceSelect,
	SourceContext,
	SourceContextProvider,
	Table,
	useFilterContext,
	useOptionalFilterContext,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IClientConfigQueryParams = void;


export const useClientConfigQuery = createGetQuery<IClientConfigQueryParams, import("@/sdk/edde/config/dto/index").ClientConfigDto>("Edde.Shared.ClientConfig");
export const useClientConfigQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.ClientConfig"])
}

export type IDateFormatListQueryParams = void;


export const useDateFormatListQuery = createPostQuery<IDateFormatListQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/api/shared/dto/index").DateDto>>("Edde.Shared.DateFormatList");
export const useDateFormatListQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.DateFormatList"])
}

export type IDateTimeFormatListQueryParams = void;


export const useDateTimeFormatListQuery = createPostQuery<IDateTimeFormatListQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/api/shared/dto/index").DateTimeDto>>("Edde.Shared.DateTimeFormatList");
export const useDateTimeFormatListQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.DateTimeFormatList"])
}

export type IDiscoveryQueryParams = void;


export const useDiscoveryQuery = createGetQuery<IDiscoveryQueryParams, import("@/sdk/edde/discovery/dto/index").DiscoveryIndexDto>("Edde.Shared.Discovery");
export const useDiscoveryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Discovery"])
}

export type ILanguageListQueryParams = void;


export const useLanguageListQuery = createPostQuery<ILanguageListQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/api/shared/dto/index").LanguageDto>>("Edde.Shared.LanguageList");
export const useLanguageListQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.LanguageList"])
}

export type ITranslationQueryParams = void;


export const useTranslationQuery = createGetQuery<ITranslationQueryParams, import("@/sdk/edde/translation/dto/index").TranslationsDto>("Edde.Shared.Translation");
export const useTranslationQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Translation"])
}

export const useDateFormatListSource = () => useSourceContext<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined>()

export interface IDateFormatListSourceContext extends ISourceContext<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined> {
}

export interface IDateFormatListSourceProps extends Partial<ISourceContextProviderProps<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined>> {
}

export const DateFormatListSource: FC<IDateFormatListSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined>
		useQuery={useDateFormatListQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IDateFormatListSourceConsumerProps extends ConsumerProps<ISourceContext<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined>> {
}

export const DateFormatListSourceConsumer: FC<IDateFormatListSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IDateFormatListBaseTableProps extends ITableProps<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined> {
}

export const DateFormatListBaseTable: FC<IDateFormatListBaseTableProps> = props => {
	return <Table<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface IDateFormatListSourceTableProps extends IDateFormatListBaseTableProps {
	source?: IDateFormatListSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: IDateFormatListQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: IDateFormatListQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/api/shared/dto/index").DateDto>>;
}

export const DateFormatListSourceTable: FC<IDateFormatListSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <DateFormatListSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<DateFormatListBaseTable {...props}/>
	</DateFormatListSource>
}

export interface IDateFormatListSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/api/shared/dto/index").DateDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/api/shared/dto/index").DateDto>;
	source?: IDateFormatListSourceProps;
}

export const DateFormatListSourceSelect: FC<IDateFormatListSourceSelectProps> = ({source, ...props}) => {
	return <DateFormatListSource defaultSize={100} {...source}>
		<QuerySourceSelect<IDateFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateDto, void | undefined, void | undefined> {...props}/>
	</DateFormatListSource>;
};

export interface IDateFormatListFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const DateFormatListFilterContext: FC<IDateFormatListFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useDateFormatListOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useDateFormatListFilterContext = () => useFilterContext<void | undefined>()

export const useDateTimeFormatListSource = () => useSourceContext<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined>()

export interface IDateTimeFormatListSourceContext extends ISourceContext<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined> {
}

export interface IDateTimeFormatListSourceProps extends Partial<ISourceContextProviderProps<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined>> {
}

export const DateTimeFormatListSource: FC<IDateTimeFormatListSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined>
		useQuery={useDateTimeFormatListQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IDateTimeFormatListSourceConsumerProps extends ConsumerProps<ISourceContext<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined>> {
}

export const DateTimeFormatListSourceConsumer: FC<IDateTimeFormatListSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IDateTimeFormatListBaseTableProps extends ITableProps<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined> {
}

export const DateTimeFormatListBaseTable: FC<IDateTimeFormatListBaseTableProps> = props => {
	return <Table<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface IDateTimeFormatListSourceTableProps extends IDateTimeFormatListBaseTableProps {
	source?: IDateTimeFormatListSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: IDateTimeFormatListQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: IDateTimeFormatListQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/api/shared/dto/index").DateTimeDto>>;
}

export const DateTimeFormatListSourceTable: FC<IDateTimeFormatListSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <DateTimeFormatListSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<DateTimeFormatListBaseTable {...props}/>
	</DateTimeFormatListSource>
}

export interface IDateTimeFormatListSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/api/shared/dto/index").DateTimeDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/api/shared/dto/index").DateTimeDto>;
	source?: IDateTimeFormatListSourceProps;
}

export const DateTimeFormatListSourceSelect: FC<IDateTimeFormatListSourceSelectProps> = ({source, ...props}) => {
	return <DateTimeFormatListSource defaultSize={100} {...source}>
		<QuerySourceSelect<IDateTimeFormatListQueryParams, import("@/sdk/edde/api/shared/dto/index").DateTimeDto, void | undefined, void | undefined> {...props}/>
	</DateTimeFormatListSource>;
};

export interface IDateTimeFormatListFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const DateTimeFormatListFilterContext: FC<IDateTimeFormatListFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useDateTimeFormatListOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useDateTimeFormatListFilterContext = () => useFilterContext<void | undefined>()

export const useLanguageListSource = () => useSourceContext<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined>()

export interface ILanguageListSourceContext extends ISourceContext<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined> {
}

export interface ILanguageListSourceProps extends Partial<ISourceContextProviderProps<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined>> {
}

export const LanguageListSource: FC<ILanguageListSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined>
		useQuery={useLanguageListQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ILanguageListSourceConsumerProps extends ConsumerProps<ISourceContext<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined>> {
}

export const LanguageListSourceConsumer: FC<ILanguageListSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ILanguageListBaseTableProps extends ITableProps<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined> {
}

export const LanguageListBaseTable: FC<ILanguageListBaseTableProps> = props => {
	return <Table<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface ILanguageListSourceTableProps extends ILanguageListBaseTableProps {
	source?: ILanguageListSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: ILanguageListQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: ILanguageListQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/api/shared/dto/index").LanguageDto>>;
}

export const LanguageListSourceTable: FC<ILanguageListSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <LanguageListSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<LanguageListBaseTable {...props}/>
	</LanguageListSource>
}

export interface ILanguageListSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/api/shared/dto/index").LanguageDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/api/shared/dto/index").LanguageDto>;
	source?: ILanguageListSourceProps;
}

export const LanguageListSourceSelect: FC<ILanguageListSourceSelectProps> = ({source, ...props}) => {
	return <LanguageListSource defaultSize={100} {...source}>
		<QuerySourceSelect<ILanguageListQueryParams, import("@/sdk/edde/api/shared/dto/index").LanguageDto, void | undefined, void | undefined> {...props}/>
	</LanguageListSource>;
};

export interface ILanguageListFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const LanguageListFilterContext: FC<ILanguageListFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useLanguageListOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useLanguageListFilterContext = () => useFilterContext<void | undefined>()
