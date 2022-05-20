/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBase} from "@/puff-smith/service/base/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISelectionProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";
import {useQueryClient} from "react-query";

export const BaseApiLink = "/api/liquid/base/query";

export type IBaseQueryParams = undefined;

export const useBaseQuery = createQueryHook<ILiquidQuery, IBase[], IBaseQueryParams>(BaseApiLink, "post");

export const useBaseSource = () => useSourceContext<IBase>();

export interface IBaseSourceContext extends ISourceContext<IBase> {
}

export interface IBaseSourceConsumerProps extends ConsumerProps<ISourceContext<IBase>> {
}

export const BaseSourceConsumer: FC<IBaseSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseSourceProps extends Partial<ISourceProviderProps<IBase>> {
}

export const BaseSource: FC<IBaseSourceProps> = props => {
	return <SourceProvider<IBase>
		name={"Base"}
		useQuery={useBaseQuery}
		{...props}
	/>;
};

export const toBaseLink = (queryParams?: IBaseQueryParams) => toLink(BaseApiLink, queryParams);
export const useBaseLink = () => toBaseLink;

export const useBasePromise = createPromiseHook<ILiquidQuery, IBase, IBaseQueryParams>(BaseApiLink, "post");
export const BasePromise = createPromise<ILiquidQuery, IBase, IBaseQueryParams>(BaseApiLink, "post");

export interface IBaseFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ILiquidQuery>>> {
}

export const BaseFilterProvider: FC<IBaseFilterProviderProps> = props => <FilterProvider<IQueryFilter<ILiquidQuery>> name={"Base"} {...props}/>;

export const useBaseOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ILiquidQuery>>();
export const useBaseFilterContext = () => useFilterContext<IQueryFilter<ILiquidQuery>>();

export interface IBaseSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ILiquidQuery>> {
}

export const BaseSourceFilter: FC<IBaseSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Base"}
/>;

export interface IBaseOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ILiquidQuery>>> {
}

export const BaseOrderByProvider: FC<IBaseOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ILiquidQuery>> name={"Base"} {...props}/>;

export const useBaseOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ILiquidQuery>>();
export const useBaseOrderByContext = () => useOrderByContext<IQueryOrderBy<ILiquidQuery>>();

export interface IBaseListSourceProps extends Partial<IListProps<IBase>> {
	sourceProps?: Partial<IBaseSourceProps>;
}

export interface IBaseSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>, IBaseQueryParams>> {
}

export const BaseSourceControlProvider: FC<IBaseSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>> name={"Base"} {...props}/>;

export const BaseListSource: FC<IBaseListSourceProps> = ({sourceProps, ...props}) => {
	return <BaseSource
		{...sourceProps}
	>
		<List<IBase>
			{...props}
		/>
	</BaseSource>;
}

export interface IBaseSourceSelectProps extends IQuerySourceSelectProps<IBase> {
	toOption: IToOptionMapper<IBase>;
	sourceProps?: IBaseSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseSourceSelect: FC<IBaseSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseSource {...sourceProps}>
					<QuerySourceSelect<IBase> {...props}/>
				</BaseSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Base.title"}
					size={props.size}
					tooltip={"common.selection.Base.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BaseSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BaseSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBaseSelectionProviderProps extends Partial<ISelectionProviderProps<IBase>> {
}

export const BaseSelectionProvider: FC<IBaseSelectionProviderProps> = props => {
	return <SelectionProvider<IBase> {...props}/>;
}

export const useBaseQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseApiLink]);
};

export const useBaseOptionalSelectionContext = () => useOptionalSelectionContext<IBase>();
export const useBaseSelectionContext = () => useSelectionContext<IBase>();
