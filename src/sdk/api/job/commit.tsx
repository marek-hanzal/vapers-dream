/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}           from "@leight-core/client";
import {FC} from "react";

export const CommitApiLink = "/api/job/commit";

export type ICommitQueryParams = any;

export const useCommitMutation = createMutationHook<void, void>(CommitApiLink, "post");

export interface ICommitDefaultFormProps extends Partial<IFormProps<void, void>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => <Form<void, void>
	useMutation={useCommitMutation}
	translation={CommitApiLink}
	{...props}
/>

export interface ICommitDefaultMobileFormProps extends Partial<IMobileFormProps<void, void>> {
}

export const CommitDefaultMobileForm: FC<ICommitDefaultMobileFormProps> = props => <MobileForm<void, void>
	useMutation={useCommitMutation}
	translation={CommitApiLink}
	{...props}
/>

export const toCommitLink = (queryParams?: ICommitQueryParams) => toLink(CommitApiLink, queryParams);
export const useCommitLink = () => toCommitLink;

export const useCommitPromise = createPromiseHook<void, void>(CommitApiLink, "post");
export const createCommitPromise = createPromise<void, void>(CommitApiLink, "post");
