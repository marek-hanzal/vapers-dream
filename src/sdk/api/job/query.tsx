/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobSource} from "@/puff-smith/service/job/interface";
import {IQueryFilter, IQueryOrderBy, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	BlockContext,
	BlockProvider,
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerSelectItem,
	Filter,
	FilterProvider,
	IDrawerSelectItemProps,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IInfiniteListProps,
	IListProps,
	InfiniteList,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISelectionProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	ITableProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	Table,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {ConsumerProps, FC} from "react";

export const JobApiLink = "/api/job/query";
export const JobCountApiLink = "/api/job/query/count";

export type IJobQueryParams = any;

export const useJobQuery = createQueryHook<ISourceQuery<IJobSource>, ISourceItem<IJobSource>[], IJobQueryParams>(JobApiLink, "post");
export const useJobCountQuery = createQueryHook<ISourceQuery<IJobSource>, number, IJobQueryParams>(JobCountApiLink, "post");

export const useJobSource = () => useSourceContext<ISourceItem<IJobSource>>();

export interface IJobSourceContext extends ISourceContext<ISourceItem<IJobSource>> {
}

export interface IJobSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IJobSource>>> {
}

export const JobSourceConsumer: FC<IJobSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IJobProviderProps extends Partial<ISourceProviderProps<ISourceItem<IJobSource>>> {
}

export const JobProvider: FC<IJobProviderProps> = props => {
	return <SourceProvider<ISourceItem<IJobSource>>
		name={"Job"}
		useQuery={useJobQuery}
		useCountQuery={useJobCountQuery}
		{...props}
	/>;
};

export const toJobLink = (queryParams?: IJobQueryParams) => toLink(JobApiLink, queryParams);
export const useJobLink = () => toJobLink;

export const useJobPromise = createPromiseHook<ISourceQuery<IJobSource>, ISourceItem<IJobSource>[], IJobQueryParams>(JobApiLink, "post");
export const JobPromise = createPromise<ISourceQuery<IJobSource>, ISourceItem<IJobSource>[], IJobQueryParams>(JobApiLink, "post");

export interface IJobFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IJobSource>>>> {
}

export const JobFilterProvider: FC<IJobFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IJobSource>>> name={"Job"} {...props}/>;

export const useJobOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IJobSource>>>();
export const useJobFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IJobSource>>>();

export interface IJobProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IJobSource>>> {
}

export const JobProviderFilter: FC<IJobProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Job"}
/>;

export interface IJobOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IJobSource>>>> {
}

export const JobOrderByProvider: FC<IJobOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IJobSource>>> name={"Job"} {...props}/>;

export const useJobOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IJobSource>>>();
export const useJobOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IJobSource>>>();

export interface IJobProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IJobSource>>, IQueryOrderBy<ISourceQuery<IJobSource>>, IJobQueryParams>> {
}

export const JobProviderControl: FC<IJobProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IJobSource>>, IQueryOrderBy<ISourceQuery<IJobSource>>> name={"Job"} {...props}/>;

export interface IJobTableSourceProps extends Partial<ITableProps<ISourceItem<IJobSource>>> {
	providerProps?: Partial<IJobProviderProps>;
}

export const JobTableSource: FC<IJobTableSourceProps> = ({providerProps, ...props}) => {
	return <JobProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IJobSource>>
			translation={JobApiLink}
			{...props}
		/>
	</JobProvider>;
}

export interface IJobListSourceProps extends Partial<IListProps<ISourceItem<IJobSource>>> {
	providerProps?: Partial<IJobProviderProps>;
}

export const JobListSource: FC<IJobListSourceProps> = ({providerProps, ...props}) => {
	return <JobProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IJobSource>>
			{...props}
		/>
	</JobProvider>;
}

export interface IJobInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IJobSource>>> {
	providerProps?: Partial<IJobProviderProps>;
}

export const JobInfiniteListSource: FC<IJobInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <JobProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IJobSource>>
			{...props}
		/>
	</JobProvider>;
}

export interface IJobSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IJobSource>> {
	toOption: IToOptionMapper<ISourceItem<IJobSource>>;
	providerProps?: Partial<IJobProviderProps>;
}

export const JobSourceSelect: FC<IJobSourceSelectProps> = ({providerProps, ...props}) => {
	return <JobProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<IJobSource>> {...props}/>
	</JobProvider>;
};

export interface IJobSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IJobSource>>> {
}

export const JobSelectionProvider: FC<IJobSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IJobSource>> {...props}/>
}

export const useJobCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([JobCountApiLink]);
};

export const useJobQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([JobApiLink]),
		withCount && queryClient.invalidateQueries([JobCountApiLink]),
	]);
};

export const useJobOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IJobSource>>();
export const useJobSelectionContext = () => useSelectionContext<ISourceItem<IJobSource>>();

export interface IJobDrawerItemProps extends Omit<IDrawerSelectItemProps<ISourceItem<IJobSource>>, "ofSelection"> {
}

export const JobDrawerItem: FC<IJobDrawerItemProps> = ({onSelection, ...props}) => {
	return <JobProvider
		withCount
	>
		<BlockProvider>
			<BlockContext.Consumer>
				{blockContext => <DrawerSelectItem<ISourceItem<IJobSource>>
					onSelection={onSelection}
					ofSelection={({value, selectionContext}) => {
						value && blockContext.block();
						value ? JobPromise({filter: {id: value as any}}).then(items => {
							selectionContext.items(items, true);
							blockContext.unblock(true);
							onSelection?.(selectionContext.selection());
						}) : undefined;
					}}
					drawerSelectProps={{
						translation: {
							namespace: JobApiLink,
							text: "select.title",
						}
					}}
					{...props}
				/>}
			</BlockContext.Consumer>
		</BlockProvider>
	</JobProvider>
}
