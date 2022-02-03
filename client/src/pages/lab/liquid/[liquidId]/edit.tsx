import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {LiquidCreateButton, LiquidLinkButton, LiquidListButton, LiquidPlotButton, PatchLiquidForm} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BackIcon, ButtonLink, EditIcon, EditTemplate, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {liquidId} = useParams();
	return <LiquidPage
		title={"lab.liquid.edit"}
		selected={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/[liquidId]', {liquidId})}
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
					href={'/lab/liquid'}
					title={'lab.liquid.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/liquid/list'}
					title={'lab.liquid.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/liquid/[liquidId]'}
					query={{liquidId}}
					title={'lab.liquid.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<EditIcon/>{t('lab.liquid.edit.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={entityContext => <QuickMenu>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<LiquidListButton/>
			</Menu.Item>
			{entityContext.entity && <Menu.Item>
				<LiquidPlotButton liquid={entityContext.entity}/>
			</Menu.Item>}
		</QuickMenu>}
	>
		{liquid => <>
			<LabMenu/>
			<EditTemplate
				icon={<LiquidIcon/>}
				label={'lab.liquid'}
				extra={<>
					<Space>
						<LiquidLinkButton icon={<BackIcon/>} liquid={liquid}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchLiquidForm liquid={liquid}/>
			</EditTemplate>
			<Divider/>
		</>}
	</LiquidPage>;
});
