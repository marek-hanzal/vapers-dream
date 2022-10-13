/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

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
	ITranslationBundle,
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

export const TranslationApiLink = "/api/translation";

export type ITranslationQueryParams = IWithIdentityQuery;

export const TranslationContext = createContext(null as unknown as IEntityContext<SourceInfer.Item<ITranslationBundle>>);

export const useTranslationContext         = (): IEntityContext<SourceInfer.Item<ITranslationBundle>> => useContext(TranslationContext, "TranslationContext");
export const useOptionalTranslationContext = () => useOptionalContext<IEntityContext<SourceInfer.Item<ITranslationBundle>>>(TranslationContext as any);

export interface ITranslationProvider extends IEntityProviderProps<SourceInfer.Item<ITranslationBundle>> {
}

export const TranslationProvider: FC<ITranslationProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <TranslationContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useTranslationQuery = createQueryHook<void, SourceInfer.Item<ITranslationBundle>, ITranslationQueryParams>(TranslationApiLink, "get");

export const useTranslationQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TranslationApiLink]);
};

export const toTranslationLink  = (queryParams?: ITranslationQueryParams) => toLink(TranslationApiLink, queryParams);
export const useTranslationLink = () => toTranslationLink;

export const useTranslationPromise = createPromiseHook<void, SourceInfer.Item<ITranslationBundle>, ITranslationQueryParams>(TranslationApiLink, "get");
export const TranslationPromise    = createPromise<void, SourceInfer.Item<ITranslationBundle>, ITranslationQueryParams>(TranslationApiLink, "get");

export interface IFetchTranslationProps extends Partial<IQueryProps<void, SourceInfer.Item<ITranslationBundle>, ITranslationQueryParams>> {
	id: string;
}

export const FetchTranslation: FC<IFetchTranslationProps> = ({id, ...props}) => <Query<void, SourceInfer.Item<ITranslationBundle>, ITranslationQueryParams>
	useQuery={useTranslationQuery}
	request={undefined}
	context={useOptionalTranslationContext()}
	queryParams={{id}}
	{...props}
/>;

export type ITranslationPageExtra =
	ReactElement
	| ((entityContext: IEntityContext<SourceInfer.Item<ITranslationBundle>>) => ReactElement);
export type ITranslationPageFooter =
	ReactElement
	| ((entityContext: IEntityContext<SourceInfer.Item<ITranslationBundle>>) => ReactElement);
export type ITranslationPageBreadcrumb =
	BreadcrumbProps
	| ReactElement<typeof Breadcrumb>
	| ((entityContext: IEntityContext<SourceInfer.Item<ITranslationBundle>>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface ITranslationBrowserPageProps extends Omit<IBrowserPageProps, "children" | "breadcrumbProps" | "extra" | "footer" | "onBack"> {
	onBack?: (navigate: INavigate, entityContext: IEntityContext<SourceInfer.Item<ITranslationBundle>>) => void;
	children?: ReactNode | ((data: SourceInfer.Item<ITranslationBundle>) => ReactNode);
	breadcrumbProps?: ITranslationPageBreadcrumb;
	extra?: ITranslationPageExtra;
	footer?: ITranslationPageFooter;
}

export const TranslationBrowserPage: FC<ITranslationBrowserPageProps> = ({children, breadcrumbProps, title, extra, footer, values, onBack, ...props}) => {
	const {id} = useParams();
	return <TranslationProvider>
		<TranslationContext.Consumer>
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
				<FetchTranslation
					context={entityContext}
					id={id}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchTranslation>
			</BrowserPage>}
		</TranslationContext.Consumer>
	</TranslationProvider>;
};

export interface ITranslationMobilePageProps extends Omit<IMobilePageProps, "children"> {
	children?: ReactNode | ((data: SourceInfer.Item<ITranslationBundle>) => ReactNode);
}

export const TranslationMobilePage: FC<ITranslationMobilePageProps> = ({children, title, values, ...props}) => {
	const {id} = useParams();
	return <TranslationProvider>
		<TranslationContext.Consumer>
			{entityContext => <MobilePage
				title={entityContext.entity ? title : undefined}
				values={{
					entity: entityContext.entity,
					...values,
				}}
				{...props}
			>
				<FetchTranslation
					context={entityContext}
					id={id}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchTranslation>
			</MobilePage>}
		</TranslationContext.Consumer>
	</TranslationProvider>;
};
