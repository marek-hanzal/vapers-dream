import {IWiresSourceTableProps, useWiresOptionalFilterContext, WiresSourceTable} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {ButtonBar} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {WireListItem} from "@/puff-smith/site/lab/wire/@module/table/WireListItem";
import {WireLinkButton} from "@/puff-smith/site/lab/wire/@module/component/button/WireLinkButton";
import {WireQuickMenu} from "@/puff-smith/site/lab/wire/@module/component/WireQuickMenu";
import {WirePreviewButton} from "@/puff-smith/site/lab/wire/@module/component/button/WirePreviewButton";

export interface IWireTableProps extends Partial<IWiresSourceTableProps> {
}

export const WireTable: FC<IWireTableProps> = props => {
	const {t} = useTranslation();
	const filterContext = useWiresOptionalFilterContext();
	return <WiresSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.wire.table.footer.label', {data: sourceContext.data()})}
		listItemRender={wire => <WireListItem wire={wire}/>}
		scroll={{x: 1500}}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, wire) => <ButtonBar>
					<WireLinkButton title={null} wire={wire}/>
					<WireQuickMenu wire={wire}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.wire.table.name',
				render: (_, wire) => <WirePreviewButton title={wire.name} wire={wire}/>,
				sorter: true,
				width: 460,
			}),
			column({
				key: "ga",
				title: 'lab.wire.table.ga',
				render: (_, wire) => wire.ga,
				sorter: true,
				width: 120,
			}),
			column({
				key: "description",
				title: 'lab.wire.table.description',
				render: (_, wire) => wire.description,
				sorter: true,
			}),
			column({
				key: "vendor",
				title: 'lab.wire.table.vendor',
				render: (_, wire) => wire.vendor.name,
				sorter: true,
				width: 260,
			}),
		]}
	</WiresSourceTable>
}
