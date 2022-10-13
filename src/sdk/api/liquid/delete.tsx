/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	SourceInfer,
	toLink
}                      from "@leight-core/viv";

export const LiquidDeleteApiLink = "/api/liquid/delete";

export type ILiquidDeleteQueryParams = any;

export const useLiquidDeleteMutation = createMutationHook<string[], SourceInfer.Item<ILiquidSource>, ILiquidDeleteQueryParams>(LiquidDeleteApiLink, "post");

export const toLiquidDeleteLink  = (queryParams?: ILiquidDeleteQueryParams) => toLink(LiquidDeleteApiLink, queryParams);
export const useLiquidDeleteLink = () => toLiquidDeleteLink;

export const useLiquidDeletePromise = createPromiseHook<string[], SourceInfer.Item<ILiquidSource>, ILiquidDeleteQueryParams>(LiquidDeleteApiLink, "post");

export const LiquidDeletePromise = createPromise<string[], SourceInfer.Item<ILiquidSource>, ILiquidDeleteQueryParams>(LiquidDeleteApiLink, "post");
