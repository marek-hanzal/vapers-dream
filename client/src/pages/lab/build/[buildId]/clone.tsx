import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon, CloneIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {BuildCreateButton, BuildLinkButton, BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, CreateTemplate, QuickMenu} from "@leight-core/leight";
import {ButtonLink, HomeIcon, useParams} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Clone() {
	const {t} = useTranslation();
	const {buildId} = useParams();
	return <BuildPage
		title={"lab.build.clone"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build/[buildId]', {buildId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/build'}
					title={'lab.build.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/build/list'}
					title={'lab.build.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/build/[buildId]'}
					query={{buildId}}
					title={'lab.build.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CloneIcon/>{t('lab.build.clone.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={<QuickMenu>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{build => <>
			<LabMenu/>
			<CreateTemplate
				icon={<BuildIcon/>}
				label={'lab.build'}
				extra={<>
					<Space>
						<BuildLinkButton icon={<BackIcon/>} build={build} title={'lab.build.link.button'}/>
					</Space>
					<Divider/>
				</>}
			>
				<CreateBuildForm build={build}/>
			</CreateTemplate>
			<Divider/>
		</>}
	</BuildPage>;
});
