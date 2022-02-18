import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {BoolInline, ButtonBar, IPreviewProps, Preview, PreviewTemplate, toLocalDateTime, useOptionalDrawerContext} from "@leight-core/leight";
import {FC} from "react";
import {Col, Divider, Row, Space, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {Uploader} from "@/puff-smith/site/shared/file";
import {FileImageOutlined} from "@ant-design/icons";
import {ImageGallery, Ohm} from "@/puff-smith";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {CommentsFilterContext as VapeCommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {useUpdateMutation} from "@/sdk/edde/api/shared/image/endpoint";
import {BuildEditButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildEditButton";
import {BuildVapeButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildVapeButton";
import {BuildAge} from "@/puff-smith/site/lab/build/@module/component/BuildAge";
import {BuildComments} from "@/puff-smith/site/lab/build/@module/component/BuildComments";
import {AtomizerComments} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerComments";
import {BuildPlotButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildPlotButton";
import {VapeComments} from "@/puff-smith/site/lab/vape/@module/component/VapeComments";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";
import {CoilInline} from "@/puff-smith/site/lab/coil/@module/component/CoilInline";
import {DriptipInline} from "@/puff-smith/site/lab/driptip/@module/component/DriptipInline";
import {Tags} from "@/puff-smith/component/Tags";
import {ModInline} from "@/puff-smith/site/lab/mod/@module/component/ModInline";
import {CottonInline} from "@/puff-smith/site/lab/cotton/@module/component/CottonInline";

export type BuildPreviewTabs = 'common' | 'comments' | 'plot' | 'upload' | 'images' | string;

export interface IBuildPreviewProps extends Partial<IPreviewProps> {
	build: BuildDto
	hidden?: BuildPreviewTabs[];
	forceList?: boolean;
}

export const BuildPreview: FC<IBuildPreviewProps> = ({build, forceList = false, hidden = [], ...props}) => {
	const {t} = useTranslation();
	const updateMutation = useUpdateMutation();
	const isDrawer = !!useOptionalDrawerContext();
	return <Tabs destroyInactiveTabPane size={'large'}>
		<Tabs.TabPane key={'common'} tab={t('lab.build.preview.tab')}>
			<PreviewTemplate
				title={build.atomizer.name}
				subTitle={build.coil.wire.name}
				browserExtra={<>
					<ButtonBar>
						<BuildEditButton build={build}/>
						<BuildVapeButton
							build={build}
							onSuccess={({navigate}) => {
								navigate('/lab/build/[buildId]/plot', {buildId: build.id});
							}}
						/>
					</ButtonBar>
					<Divider/>
				</>}
				span={24}
			/>
			<Row gutter={16}>
				<Col span={isDrawer ? 24 : 8}>
					<Preview translation={'lab.build.preview'} {...props}>
						{{
							"mod": build?.mod && <ModInline mod={build.mod}/>,
							"coil": <CoilInline coil={build.coil}/>,
							"cotton": <CottonInline cotton={build.cotton}/>,
						}}
					</Preview>
				</Col>
				<Col span={isDrawer ? 24 : 8}>
					<Preview translation={'lab.build.preview'} {...props}>
						{{
							"ohm": build?.ohm && <Ohm ohm={build?.ohm}/>,
							"draw": build.draws.length && <Tags tags={build.draws}/>,
							"age": <BuildAge build={build}/>,
						}}
					</Preview>
				</Col>
				<Col span={isDrawer ? 24 : 8}>
					<Preview translation={'lab.build.preview'} {...props}>
						{{
							"dual": <BoolInline bool={build.dual}/>,
							"dualMode": build.dual && t('lab.dual-coil.' + build.dualMode),
							"driptip": <DriptipInline driptip={build.driptip}/>,
							"created": toLocalDateTime(build.created),
							"active": <BoolInline bool={build.active}/>,
						}}
					</Preview>
				</Col>
			</Row>
			<Divider/>
			<VapesFilterContext defaultFilter={{buildIds: [build.id]}}>
				<VapePlot selected={['median']}/>
			</VapesFilterContext>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.build.comments.tab')}>
			<Tabs destroyInactiveTabPane size={'small'}>
				<Tabs.TabPane key={'build.comments'} tab={t('lab.build.comments.build.tab')}>
					<BuildComments build={build}/>
				</Tabs.TabPane>
				<Tabs.TabPane key={'atomizer.comments'} tab={t('lab.build.comments.atomizer.tab')}>
					<AtomizerComments atomizer={build.atomizer}/>
				</Tabs.TabPane>
				<Tabs.TabPane key={'vape.comments'} tab={t('lab.build.comments.vape.tab')}>
					<VapeCommentsFilterContext defaultFilter={{buildIds: [build.id]}}>
						<VapeComments/>
					</VapeCommentsFilterContext>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
		{!hidden?.includes('plot') && <Tabs.TabPane key={'plot'} tab={t('lab.build.vape.plot.tab')}>
			<VapesFilterContext defaultFilter={{buildIds: [build.id]}}>
				<Space>
					<VapeFilter disabled={['atomizerIds']}/>
					<BuildPlotButton
						build={build}
						title={null}
					/>
				</Space>
				<VapePlot
					selected={['median']}
					emptyResultProps={{
						extra: <BuildVapeButton type={'primary'} build={build}/>
					}}
				/>
				<Divider/>
				<VapeTable
					forceList={forceList}
					hidden={['atomizer']}
				/>
			</VapesFilterContext>
		</Tabs.TabPane>}
		{!hidden?.includes('images') && <Tabs.TabPane key={'images'} tab={t('lab.build.images.tab')}>
			<ImageGallery gallery={'/build/image/' + build.id}/>
		</Tabs.TabPane>}
		{!hidden?.includes('upload') && <Tabs.TabPane key={'upload'} tab={t('lab.build.upload.tab')}>
			<Uploader
				icon={<FileImageOutlined/>}
				translation={'lab.build.image'}
				path={'/build/image/' + build.id + '/image.raw'}
				onSuccess={() => updateMutation.mutate()}
			/>
		</Tabs.TabPane>}
	</Tabs>
}
