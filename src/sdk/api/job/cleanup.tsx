/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobQuery} from "@/puff-smith/service/job/interface";
import {IQueryFilter} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const CleanupApiLink = "/api/job/cleanup";

export type ICleanupQueryParams = any;

export const useCleanupMutation = createMutationHook<IQueryFilter<IJobQuery> | undefined, void>(CleanupApiLink, "post");

export interface ICleanupDefaultFormProps extends Partial<IFormProps<IQueryFilter<IJobQuery> | undefined, void>> {
}

export const CleanupDefaultForm: FC<ICleanupDefaultFormProps> = props => <Form<IQueryFilter<IJobQuery> | undefined, void>
	useMutation={useCleanupMutation}
	translation={CleanupApiLink}
	{...props}
/>

export interface ICleanupDefaultMobileFormProps extends Partial<IMobileFormProps<IQueryFilter<IJobQuery> | undefined, void>> {
}

export const CleanupDefaultMobileForm: FC<ICleanupDefaultMobileFormProps> = props => <MobileForm<IQueryFilter<IJobQuery> | undefined, void>
	useMutation={useCleanupMutation}
	translation={CleanupApiLink}
	{...props}
/>

export const toCleanupLink = (queryParams?: ICleanupQueryParams) => toLink(CleanupApiLink, queryParams);
export const useCleanupLink = () => toCleanupLink;

export const useCleanupPromise = createPromiseHook<IQueryFilter<IJobQuery> | undefined, void>(CleanupApiLink, "post");
export const createCleanupPromise = createPromise<IQueryFilter<IJobQuery> | undefined, void>(CleanupApiLink, "post");
