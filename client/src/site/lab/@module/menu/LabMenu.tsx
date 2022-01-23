import {CreateMenuItem, HomeIcon, MenuDivider} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerIcon, BuildIcon, CellIcon, CoilIcon, CottonIcon, IMenuProps, LiquidIcon, Menu, MixtureIcon, ModIcon, SetupIcon, ToolIcon, VapeIcon, VendorIcon, WireIcon} from "@/puff-smith";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.mixture.menu", "/lab/mixture", <MixtureIcon/>)}
		{CreateMenuItem("lab.setup.menu", "/lab/setup", <SetupIcon/>)}
		{CreateMenuItem("lab.vape.menu", "/lab/vape", <VapeIcon/>)}
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
