import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {CellInventoryCreateButton} from "@/puff-smith/site/market/cell/@module/button/CellInventoryCreateButton";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellMarketListSource, ICellMarketListSourceProps} from "@/sdk/api/market/cell/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICellListProps extends Partial<ICellMarketListSourceProps> {
}

export const CellList: FC<ICellListProps> = props => {
	return <CellMarketListSource
		{...props}
	>
		{({cell, isOwned}) => <ListItem
			key={cell.id}
			extra={<CellInventoryCreateButton type={"link"} cell={cell}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={cell}/>
					<CellNameInline cell={cell}/>
					{toHumanNumber(cell.capacity)}
					<Ohm ohm={cell.ohm} tooltip={"common.cell.ohm.tooltip"}/>
					<Tags tags={[cell.type]}/>
					{isOwned && <BoolInline bool={isOwned}/>}
				</Space>}
			/>
		</ListItem>}
	</CellMarketListSource>;
};
