import {LinkTo} from "@leight-core/common";
import {Col, Divider, Row, Space} from "antd";
import {LogoutButton} from "@/puff-smith/component/button";
import {LogoIcon} from "@/puff-smith/component/icon";
import {NotificationButton, UserProfileButton} from "@/puff-smith/site/lab/@module/component/button";

export const Header = () => {
	return <Row style={{margin: "0 1em"}}>
		<Col flex={"auto"}>
			<LinkTo href={"/lab"}>
				<LogoIcon style={{width: "7.5em", display: "inline"}}/>
			</LinkTo>
		</Col>
		<Col span={12}>
			{/*<Moodle*/}
			{/*/>*/}
		</Col>
		<Col flex={"auto"} style={{textAlign: "right"}}>
			<Space size={"middle"} split={<Divider type={"vertical"}/>}>
				<NotificationButton/>
				<UserProfileButton/>
				<LogoutButton/>
			</Space>
		</Col>
	</Row>;
};
