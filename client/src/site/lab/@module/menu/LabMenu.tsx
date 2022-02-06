import {CreateMenuItem, Menu} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerIcon, BuildIcon, CellIcon, CoilIcon, CottonIcon, IMenuProps, LiquidIcon, MixtureIcon, ModIcon, ToolIcon, VapeIcon, VendorIcon, WireIcon} from "@/puff-smith";
import {isBrowser} from "react-device-detect";
import {HomeIcon, MenuDivider} from "@leight-core/leight/dist";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	return <Menu style={{border: 'none'}} {...props}>
		{isBrowser && <>
			<MenuDivider/>
			{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
			<MenuDivider/>
		</>}
		{CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.vape.menu", "/lab/vape", <VapeIcon/>)}
		{CreateMenuItem("lab.mixture.menu", "/lab/mixture", <MixtureIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.atomizer.menu", "/lab/atomizer", <AtomizerIcon/>)}
		{CreateMenuItem("lab.mod.menu", "/lab/mod", <ModIcon/>)}
		{CreateMenuItem("lab.cell.menu", "/lab/cell", <CellIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.liquid.menu", "/lab/liquid", <LiquidIcon/>)}
		{CreateMenuItem("lab.cotton.menu", "/lab/cotton", <CottonIcon/>)}
		{CreateMenuItem("lab.wire.menu", "/lab/wire", <WireIcon/>)}
		{CreateMenuItem("lab.coil.menu", "/lab/coil", <CoilIcon/>)}
		{CreateMenuItem("lab.vendor.menu", "/lab/vendor", <VendorIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.tool.menu", "/lab/tool", <ToolIcon/>)}
	</Menu>;
};
