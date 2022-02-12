import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/comment/endpoint";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {CreateCommentForm, MixturePreviewButton} from "@/puff-smith/site/lab/mixture";
import {MixtureCommentDto} from "@/sdk/puff-smith/mixture/dto/comment";
import {Comments} from "@/puff-smith/site/lab/comment";
import {Divider, Space} from "antd";

export interface IMixtureCommentsProps extends Partial<ICommentsSourceProps> {
	mixture?: MixtureDto;
}

export const MixtureComments: FC<IMixtureCommentsProps> = ({mixture, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <CommentsSource
		defaultFilter={mixture && {mixtureId: mixture.id}}
		{...props}
	>
		<Comments<MixtureCommentDto>
			form={mixture && <CreateCommentForm mixture={mixture}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: <Space size={0} split={<Divider type={'vertical'}/>}>
					<MixturePreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.mixture.liquid.name}
						icon={null}
						mixture={dto.mixture}
					/>
				</Space>,
			})}
			onEdit={() => commentsQueryInvalidate()}
			onDelete={() => commentsQueryInvalidate()}
		/>
	</CommentsSource>
}
