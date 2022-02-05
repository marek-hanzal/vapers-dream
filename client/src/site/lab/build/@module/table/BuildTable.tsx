import {BuildsSourceTable, IBuildsSourceTableProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {CoilInline, CoilLinkButton} from "@/puff-smith/site/lab/coil";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import {List, Space, Typography} from "antd";
import {BuildAge, BuildCommentButton, BuildLinkButton, BuildQuickMenu, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildFilterDto} from "@/sdk/puff-smith/build/dto";
import {useTranslation} from "react-i18next";
import {useOptionalFilterContext} from "@leight-core/leight";
import {durationOf} from "@leight-core/leight/dist";
import {SimpleRating} from "@/puff-smith";

export interface IBuildTableProps extends Partial<IBuildsSourceTableProps> {
}

export const BuildTable: FC<IBuildTableProps> = props => {
	const filterContext = useOptionalFilterContext<BuildFilterDto>();
	const {t} = useTranslation();
	return <BuildsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.build.table.footer.label', {data: sourceContext?.result?.data})}
		listItemRender={build => <List.Item
			className={build.active ? 'active' : 'inactive'}
			actions={[<BuildQuickMenu key={'quick-menu'} build={build}/>]}
		>
			<Space direction={'vertical'}>
				<AtomizerInline atomizer={build.atomizer}/>
				<CoilInline coil={build.coil}/>
				<CottonInline cotton={build.cotton}/>
				<Space>
					<Typography.Text type={'secondary'}>{t('lab.build.age.label')}</Typography.Text>{durationOf(build.created).humanize()}
				</Space>
				<Space>
					<BuildVapeButton size={'small'} build={build}/>
					<BuildCommentButton size={'small'} build={build}/>
				</Space>
			</Space>
		</List.Item>}
		rowClassName={build => build.active ? 'active' : 'inactive'}
		scroll={{x: 1600}}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, build) => <Space size={1}>
					<BuildLinkButton title={null} build={build}/>
					<BuildQuickMenu build={build}/>
				</Space>,
				width: 0,
			}),
			column({
				key: "atomizer",
				title: "lab.build.table.atomizer",
				render: (_, build) => <AtomizerInline atomizer={build.atomizer}/>,
				width: 300,
			}),
			column({
				key: "coil",
				title: "lab.build.table.coil",
				render: (_, build) => <Space size={0}>
					<CoilLinkButton coil={build.coil} title={null}/>
					<CoilInline vertical coil={build.coil}/>
				</Space>,
				width: 320,
			}),
			column({
				key: "cotton",
				title: "lab.build.table.cotton",
				render: (_, build) => <CottonInline cotton={build.cotton}/>,
				width: 300,
			}),
			column({
				key: "ohm",
				dataIndex: "ohm",
				title: "lab.build.table.ohm",
				render: (_, build) => build.ohm.toFixed(2) + 'ohm',
				width: 140,
			}),
			column({
				key: "glow",
				dataIndex: "glow",
				title: "lab.build.table.glow",
				render: (_, build) => <SimpleRating value={build.glow}/>,
				sorter: true,
				width: 140,
			}),
			column({
				key: "age",
				title: "lab.build.table.age",
				render: (_, build) => <BuildAge build={build}/>,
			}),
		]}
	</BuildsSourceTable>
}
