import {FC} from "react";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {WirePreviewButton} from "@/puff-smith/site/lab/wire/@module/component/button/WirePreviewButton";
import {WireEditButton} from "@/puff-smith/site/lab/wire/@module/component/button/WireEditButton";
import {WireDeleteButton} from "@/puff-smith/site/lab/wire/@module/component/button/WireDeleteButton";

export interface IWireQuickMenuProps extends Partial<IDrawerMenuProps> {
	wire: WireDto;
}

export const WireQuickMenu: FC<IWireQuickMenuProps> = ({wire, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.wire.context.menu', {data: wire})}
		{...props}
	>
		<Menu.Item>
			<WirePreviewButton wire={wire}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<WireEditButton wire={wire}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<WireDeleteButton wire={wire}/>
		</Menu.Item>
	</DrawerMenu>
}
