import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {ModIcon} from "@/puff-smith";
import {ModCreateButton, ModPreview} from "@/puff-smith/site/lab/mod";
import {ModPage} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function Index() {
	return <ModPage
		title={"lab.mod.index"}
		menuSelection={['/lab/mod']}
		onBack={navigate => navigate('/lab/mod')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mod'}
				title={'lab.mod.label'}
			/>
			<BreadcrumbIcon
				icon={<ModIcon/>}
				label={'lab.mod.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<ModCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<ModCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{mod => <ModPreview mod={mod}/>}
	</ModPage>;
});
