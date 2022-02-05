import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {ButtonLink, CreateIcon, CreateTemplate, HomeIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.create"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
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
				<Space size={'small'}>
					<CreateIcon/>{t('lab.build.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<BuildListButton/>
		</Space>}
	>
		<CreateTemplate
			icon={<BuildIcon/>}
			label={'lab.build'}
		>
			<CreateBuildForm/>
		</CreateTemplate>
	</LabPage>;
});
