import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {Card, durationOf, Preview, toLocalDateTime} from "@leight-core/leight";
import {Divider, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {DriptipInline} from "@/puff-smith/site/lab/driptip";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {ModInline} from "@/puff-smith/site/lab/mod";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {CreateCommentForm} from "@/puff-smith/site/lab/vape";
import {CommonRateInput} from "@/puff-smith";
import {BuildAge} from "@/puff-smith/site/lab/build";

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
						"build.age": <BuildAge build={vape.build}/>,
						"mixture.age": durationOf(vape.mixture.mixed, vape.stamp).humanize(),
						"driptip": <DriptipInline driptip={vape.driptip}/>,
						"leaks": <CommonRateInput disabled value={vape.leaks}/>,
						"dryhit": <CommonRateInput disabled value={vape.dryhit}/>,
						"stamp": toLocalDateTime(vape.stamp),
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card key={'rating'} title={t('lab.vape.rating.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"rating": <CommonRateInput disabled value={vape.rating}/>,
						"taste": <CommonRateInput disabled value={vape.taste}/>,
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card key={'settings'} title={t('lab.vape.settings.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"power": vape.power ? vape.power + ' W' : '-',
						"tc": vape.tc ? vape.tc + ' °C' : '-',
						"airflow": <CommonRateInput disabled value={vape.airflow}/>,
						"juice": <CommonRateInput disabled value={vape.juice || 0}/>,
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card key={'vape'} title={t('lab.vape.vape.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"mtl": <CommonRateInput disabled value={vape.mtl}/>,
						"dl": <CommonRateInput disabled value={vape.dl}/>,
						"clouds": <CommonRateInput disabled value={vape.clouds}/>,
					}}
				</Preview>
			</Card>
			<Divider/>
			<Card title={t('lab.vape.rating-advanced.title')}>
				<Preview translation={'lab.vape.preview'}>
					{{
						"throathit": <CommonRateInput disabled value={vape.throathit}/>,
						"fruits": <CommonRateInput disabled value={vape.fruits}/>,
						"tobacco": <CommonRateInput disabled value={vape.tobacco}/>,
						"cakes": <CommonRateInput disabled value={vape.cakes}/>,
						"complex": <CommonRateInput disabled value={vape.complex}/>,
						"fresh": <CommonRateInput disabled value={vape.fresh}/>,
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
