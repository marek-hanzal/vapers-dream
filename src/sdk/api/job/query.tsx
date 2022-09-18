/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobSource} from "@/puff-smith/service/job/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IDrawerContext, IQueryFilter, IQueryOrderBy, ISelectionContext, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	BubbleButton,
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	DrawerContext,
	Filter,
	FilterProvider,
	IDrawerButtonProps,
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
	SelectionContext,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	Table,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalFormItemContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {CheckOutline} from "antd-mobile-icons";
import {ConsumerProps, FC, ReactNode, useRef} from "react";

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

export const useJobPromise = createPromiseHook<ISourceQuery<IJobSource>, ISourceItem<IJobSource>, IJobQueryParams>(JobApiLink, "post");
export const JobPromise = createPromise<ISourceQuery<IJobSource>, ISourceItem<IJobSource>, IJobQueryParams>(JobApiLink, "post");

export interface IJobFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IJobSource>>>> {
}

export const JobFilterProvider: FC<IJobFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IJobSource>>> name={"Job"} {...props}/>;

export const useJobOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IJobSource>>>()
export const useJobFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IJobSource>>>()

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

export interface IJobSourceSelection {
	selectionContext: ISelectionContext<ISourceItem<IJobSource>>;
	drawerContext: IDrawerContext;
}

export interface IJobSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IJobSource>> {
	toOption: IToOptionMapper<ISourceItem<IJobSource>>;
	providerProps?: Partial<IJobProviderProps>;
	selectionList?: (context: IJobSourceSelection) => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
	selectionProvider?: IJobProviderControlProps;
	selectionDrawer?: IDrawerButtonProps;
}

export const JobSourceSelect: FC<IJobSourceSelectProps> = ({providerProps, selectionList, selectionProps, selectionProvider, selectionDrawer, ...props}) => {
	const formItem = useOptionalFormItemContext();
	const selection = useRef<Record<string, ISourceItem<IJobSource>>>();
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<JobProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IJobSource>> {...props}/>
				</JobProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Job.title"}
					size={props.size}
					tooltip={"common.selection.Job.title.tooltip"}
					width={800}
					type={"text"}
					ghost
					{...selectionDrawer}
				>
					<DrawerContext.Consumer>
						{drawerContext => <JobProviderControl
							defaultSize={10}
							{...selectionProvider}
						>
							<SelectionProvider<ISourceItem<IJobSource>>
								type={"single"}
								applySelection={selection.current}
								onSelection={({selected, items}) => {
									drawerContext.close();
									formItem?.setValue(selected);
									selection.current = items;
								}}
								{...selectionProps}
							>
								<SelectionContext.Consumer>
									{selectionContext => <>
										<BubbleButton
											icon={<CheckOutline fontSize={32}/>}
											onClick={() => selectionContext.handleSelection()}
										/>
										{selectionList({
											selectionContext,
											drawerContext,
										})}
									</>}
								</SelectionContext.Consumer>
							</SelectionProvider>
						</JobProviderControl>}
					</DrawerContext.Consumer>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
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
