import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {Card, Preview} from "@leight-core/leight";
import {Divider, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {DriptipInline} from "@/puff-smith/site/lab/driptip";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import dayjs from "dayjs";
import {ModInline} from "@/puff-smith/site/lab/mod";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {AirflowInput, CloudsInput, CreateCommentForm, DryhitInput, FreshInput, JuiceInput, LeaksInput, ThroathitInput} from "@/puff-smith/site/lab/vape";
import {CommonRateInput} from "@/puff-smith";
import {toLocalDateTime} from "@leight-core/leight/dist";

export interface IVapePreviewProps {
	vape: VapeDto;
}

export const VapePreview: FC<IVapePreviewProps> = ({vape}) => {
	const {t} = useTranslation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.vape.common.tab')}>
			<Card key={'common'} title={t('lab.vape.common.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"coil": <CoilInline vertical coil={vape.build.coil}/>,
						"mod": <ModInline mod={vape.mod}/>,
						// @ts-ignore
						"mixture.age": dayjs.duration(dayjs(vape.stamp).diff(vape.mixture.mixed)).humanize(),
						"driptip": <DriptipInline driptip={vape.driptip}/>,
						"leaks": <LeaksInput value={vape.leaks}/>,
						"dryhit": <DryhitInput value={vape.dryhit}/>,
						"stamp": toLocalDateTime(vape.stamp),
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card key={'rating'} title={t('lab.vape.rating.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"rating": <CommonRateInput value={vape.rating}/>,
						"taste": <CommonRateInput value={vape.taste}/>,
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card key={'settings'} title={t('lab.vape.settings.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"power": vape.power ? vape.power + ' W' : '-',
						"tc": vape.tc ? vape.tc + ' °C' : '-',
						"airflow": <AirflowInput value={vape.airflow}/>,
						"juice": <JuiceInput value={vape.juice || 0}/>,
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card key={'vape'} title={t('lab.vape.vape.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"mtl": <CommonRateInput value={vape.mtl}/>,
						"dl": <CommonRateInput value={vape.dl}/>,
						"clouds": <CloudsInput value={vape.clouds}/>,
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card title={t('lab.vape.rating-advanced.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"throathit": <ThroathitInput value={vape.throathit}/>,
						"fruits": <CommonRateInput value={vape.fruits}/>,
						"tobacco": <CommonRateInput value={vape.tobacco}/>,
						"cakes": <CommonRateInput value={vape.cakes}/>,
						"complex": <CommonRateInput value={vape.complex}/>,
						"fresh": <FreshInput value={vape.fresh}/>,
					}}
				</Preview>
			</Card>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.vape.comments.tab')}>
			<CommentsSource
				filter={{vapeId: vape.id}}
				defaultOrderBy={{stamp: false}}
			>
				<CommentList
					form={<CreateCommentForm vape={vape}/>}
					onEdit={() => commentsQueryInvalidate()}
					onDelete={() => commentsQueryInvalidate()}
				/>
			</CommentsSource>
		</Tabs.TabPane>
	</Tabs>
}
