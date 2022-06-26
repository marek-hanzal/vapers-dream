import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {CellRatingButton} from "@/puff-smith/site/inventory/cell/@module/button/CellRatingButton";
import {CellListEmpty} from "@/puff-smith/site/inventory/cell/@module/list/CellListEmpty";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellInventoryListSource, ICellInventoryListSourceProps} from "@/sdk/api/inventory/cell/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICellInventoryListProps extends Partial<ICellInventoryListSourceProps> {
}

export const CellInventoryList: FC<ICellInventoryListProps> = props => {
	return <CellInventoryListSource
		locale={{
			emptyText: <CellListEmpty/>
		}}
		{...props}
	>
		{cellInventory => <ListItem
			key={cellInventory.id}
			extra={<CellRatingButton cellInventory={cellInventory}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={cellInventory}/>
					<CellNameInline cell={cellInventory.cell}/>
					<Ohm ohm={cellInventory.cell.ohm} tooltip={"common.cell.ohm.tooltip"}/>
					<CodeInline code={cellInventory}/>
					<Tags tags={[cellInventory.cell.type]}/>
				</Space>}
			/>
		</ListItem>}
	</CellInventoryListSource>;
};
