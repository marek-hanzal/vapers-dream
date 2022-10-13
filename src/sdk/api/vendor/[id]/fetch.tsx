/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendorSource}  from "@/puff-smith/service/vendor/interface";
import {
	BrowserPage,
	createPromise,
	createPromiseHook,
	createQueryHook,
	EntityContext,
	EntityProvider,
	IBrowserPageProps,
	IEntityContext,
	IEntityProviderProps,
	IMobilePageProps,
	INavigate,
	IQueryProps,
	isCallable,
	IWithIdentityQuery,
	MobilePage,
	Query,
	SourceInfer,
	toLink,
	useContext,
	useOptionalContext,
	useParams
}                       from "@leight-core/viv";
import {useQueryClient} from "@tanstack/react-query";
import {
	Breadcrumb,
	BreadcrumbProps
}                       from "antd";
import {
	createContext,
	FC,
	ReactElement,
	ReactNode
}                       from "react";

export const VendorApiLink = "/api/vendor/[id]/fetch";

export type IVendorQueryParams = IWithIdentityQuery;

export const VendorContext = createContext(null as unknown as IEntityContext<SourceInfer.Item<IVendorSource>>);

export const useVendorContext         = (): IEntityContext<SourceInfer.Item<IVendorSource>> => useContext(VendorContext, "VendorContext");
export const useOptionalVendorContext = () => useOptionalContext<IEntityContext<SourceInfer.Item<IVendorSource>>>(VendorContext as any);

export interface IVendorProvider extends IEntityProviderProps<SourceInfer.Item<IVendorSource>> {
}

export const VendorProvider: FC<IVendorProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <VendorContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useVendorQuery = createQueryHook<void, SourceInfer.Item<IVendorSource>, IVendorQueryParams>(VendorApiLink, "get");

export const useVendorQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorApiLink]);
};

export const toVendorLink  = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<void, SourceInfer.Item<IVendorSource>, IVendorQueryParams>(VendorApiLink, "get");
export const VendorPromise    = createPromise<void, SourceInfer.Item<IVendorSource>, IVendorQueryParams>(VendorApiLink, "get");

export interface IFetchVendorProps extends Partial<IQueryProps<void, SourceInfer.Item<IVendorSource>, IVendorQueryParams>> {
	id: string;
}

export const FetchVendor: FC<IFetchVendorProps> = ({id, ...props}) => <Query<void, SourceInfer.Item<IVendorSource>, IVendorQueryParams>
	useQuery={useVendorQuery}
	request={undefined}
	context={useOptionalVendorContext()}
	queryParams={{id}}
	{...props}
/>;

export type IVendorPageExtra =
	ReactElement
	| ((entityContext: IEntityContext<SourceInfer.Item<IVendorSource>>) => ReactElement);
export type IVendorPageFooter =
	ReactElement
	| ((entityContext: IEntityContext<SourceInfer.Item<IVendorSource>>) => ReactElement);
export type IVendorPageBreadcrumb =
	BreadcrumbProps
	| ReactElement<typeof Breadcrumb>
	| ((entityContext: IEntityContext<SourceInfer.Item<IVendorSource>>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IVendorBrowserPageProps extends Omit<IBrowserPageProps, "children" | "breadcrumbProps" | "extra" | "footer" | "onBack"> {
	onBack?: (navigate: INavigate, entityContext: IEntityContext<SourceInfer.Item<IVendorSource>>) => void;
	children?: ReactNode | ((data: SourceInfer.Item<IVendorSource>) => ReactNode);
	breadcrumbProps?: IVendorPageBreadcrumb;
	extra?: IVendorPageExtra;
	footer?: IVendorPageFooter;
}

export const VendorBrowserPage: FC<IVendorBrowserPageProps> = ({children, breadcrumbProps, title, extra, footer, values, onBack, ...props}) => {
	const {id} = useParams();
	return <VendorProvider>
		<VendorContext.Consumer>
			{entityContext => <BrowserPage
				title={entityContext.entity ? title : undefined}
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				footer={footer ? (isCallable(footer) ? (footer as any)(entityContext) : footer) : undefined}
				values={{
					entity: entityContext.entity,
					...values,
				}}
				onBack={onBack ? navigate => onBack?.(navigate, entityContext) : undefined}
				{...props}
			>
				<FetchVendor
					context={entityContext}
					id={id}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchVendor>
			</BrowserPage>}
		</VendorContext.Consumer>
	</VendorProvider>;
};

export interface IVendorMobilePageProps extends Omit<IMobilePageProps, "children"> {
	children?: ReactNode | ((data: SourceInfer.Item<IVendorSource>) => ReactNode);
}

export const VendorMobilePage: FC<IVendorMobilePageProps> = ({children, title, values, ...props}) => {
	const {id} = useParams();
	return <VendorProvider>
		<VendorContext.Consumer>
			{entityContext => <MobilePage
				title={entityContext.entity ? title : undefined}
				values={{
					entity: entityContext.entity,
					...values,
				}}
				{...props}
			>
				<FetchVendor
					context={entityContext}
					id={id}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchVendor>
			</MobilePage>}
		</VendorContext.Consumer>
	</VendorProvider>;
};
