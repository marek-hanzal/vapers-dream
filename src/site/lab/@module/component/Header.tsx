import {Divider, PageHeader, PageHeaderProps} from "antd";
import {LogoIcon, LogoutButton} from "@/puff-smith";
import {LabMenu} from "@/puff-smith/site/lab";
import {ButtonBar, LinkTo} from "@leight-core/client";
import {FC} from "react";
import {UserPuffies} from "@/puff-smith/site/shared/user";

export interface IHeaderProps extends Partial<PageHeaderProps> {
}

export const Header: FC<IHeaderProps> = props => {
	return <PageHeader
		ghost
		title={<LinkTo href={"/lab"}>
			<LogoIcon height={64}/>
		</LinkTo>}
		subTitle={<LabMenu/>}
		style={{
			minHeight: '8vh',
		}}
		extra={<ButtonBar split={<Divider type={'vertical'}/>}>
			<UserPuffies/>
			<LogoutButton/>
		</ButtonBar>}
		{...props}
	/>
};
