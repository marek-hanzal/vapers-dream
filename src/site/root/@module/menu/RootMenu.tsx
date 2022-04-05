import {ImportIcon, JobIcon, LabIcon, MarketIcon, PublicIcon, SitesIcon, UserIcon} from "@/puff-smith";
import {CreateMenuItem, FileIcon, HomeIcon, IMenuProps, Menu, SubMenu} from "@leight-core/client";
import {FC} from "react";

export interface IRootMenuProps extends Partial<IMenuProps> {
}

export const RootMenu: FC<IRootMenuProps> = props => {
	return <Menu style={{backgroundColor: "transparent", minWidth: "50vw"}} mode={"horizontal"} {...props}>
		{CreateMenuItem("root.home.menu", "/root", <HomeIcon/>)}
		{CreateMenuItem("root.import.menu", "/root/import", <ImportIcon/>)}
		{CreateMenuItem("root.job.menu", "/root/job", <JobIcon/>)}
		{CreateMenuItem("root.file.menu", "/root/file", <FileIcon/>)}
		{CreateMenuItem("root.user.menu", "/root/user", <UserIcon/>)}
		<SubMenu
			key={"root.sites"}
			id={"root.sites"}
			icon={<SitesIcon/>}
		>
			{CreateMenuItem("root.market.menu", "/market", <MarketIcon/>)}
			{CreateMenuItem("root.lab.menu", "/lab", <LabIcon/>)}
			{CreateMenuItem("root.public.menu", "/public", <PublicIcon/>)}
		</SubMenu>
	</Menu>;
};
