import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsOptionalFilterContext, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {Comments} from "@/puff-smith/site/lab/comment";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeCommentDto} from "@/sdk/puff-smith/vape/dto/comment";
import {CreateCommentForm, VapePreviewButton} from "@/puff-smith/site/lab/vape";
import {Divider, Space} from "antd";
import {MixturePreviewButton} from "@/puff-smith/site/lab/mixture";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil";

export interface IVapeCommentsProps extends Partial<ICommentsSourceProps> {
	vape?: VapeDto;
}

export const VapeComments: FC<IVapeCommentsProps> = ({vape, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const filterContext = useCommentsOptionalFilterContext();
	return <CommentsSource
		filter={filterContext?.filter}
		defaultFilter={vape && {vapeId: vape.id}}
		{...props}
	>
		<Comments<VapeCommentDto>
			form={vape && <CreateCommentForm vape={vape}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: <Space size={0} split={<Divider type={'vertical'}/>}>
					<VapePreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.vape.build.atomizer.name}
						icon={null}
						vape={dto.vape}
					/>
					<CoilPreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.vape.build.coil.wire.name}
						icon={null}
						coil={dto.vape.build.coil}
					/>
					<MixturePreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.vape.mixture.liquid.name}
						icon={null}
						mixture={dto.vape.mixture}
					/>
				</Space>,
			})}
			onEdit={() => commentsQueryInvalidate()}
			onDelete={() => commentsQueryInvalidate()}
		/>
	</CommentsSource>
}
