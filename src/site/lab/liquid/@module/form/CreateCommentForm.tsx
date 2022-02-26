import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/comment/endpoint";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/common";
import {CommentOutlined} from "@ant-design/icons";

export interface ICreateCommentFormProps extends Partial<ICreateDefaultFormProps> {
	liquid: LiquidDto;
}

export const CreateCommentForm: FC<ICreateCommentFormProps> = ({liquid, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.comment'}
		onSuccess={response => {
			message.success(t('lab.comment.create.success'));
			commentsQueryInvalidate();
			response.formContext.reset();
			onSuccess?.(response);
		}}
		toMutation={values => ({
			liquidId: liquid.id,
			...values,
		})}
		{...props}
	>
		<FormItem
			field={'comment'}
		>
			<TextArea
				autoSize={{minRows: 6}}
				style={{width: '100%'}}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit
				icon={<CommentOutlined/>}
				label={'create.submit'}
			/>
		</Centered>
	</CreateDefaultForm>
}
