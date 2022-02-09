import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon} from "@/puff-smith";
import {Divider} from "antd";
import {AtomizerCreateButton, AtomizerLinkButton, AtomizerListButton, PatchAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, HomeIcon, ListIcon, Template, useParams} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	const {atomizerId} = useParams();
	return <AtomizerPage
		title={"lab.atomizer.edit"}
		collapsed
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer/[atomizerId]', {atomizerId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer'}
				title={'lab.atomizer.label'}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer/list'}
				title={'lab.atomizer.list.label'}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer/[atomizerId]'}
				query={{atomizerId}}
				title={'lab.atomizer.index.label'}
			/>
			<BreadcrumbIcon
				icon={<EditIcon/>}
				label={'lab.atomizer.edit.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<AtomizerListButton/>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{atomizer => <>
			<Template
				icon={<AtomizerIcon/>}
				title={atomizer.name}
				subTitle={atomizer.vendor.name}
				extra={<>
					<ButtonBar>
						<AtomizerLinkButton icon={<BackIcon/>} atomizer={atomizer}/>
					</ButtonBar>
					<Divider/>
				</>}
			>
				<PatchAtomizerForm atomizer={atomizer}/>
			</Template>
		</>}
	</AtomizerPage>;
});
