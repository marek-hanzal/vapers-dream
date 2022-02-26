import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {ModPreviewButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModPreviewButton";
import {ModEditButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModEditButton";
import {ModDeleteButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModDeleteButton";

export interface IModQuickMenuProps extends Partial<IDrawerMenuProps> {
	mod: ModDto;
}

export const ModQuickMenu: FC<IModQuickMenuProps> = ({mod, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.mod.context.menu', {data: mod})}
		{...props}
	>
		<Menu.Item>
			<ModPreviewButton mod={mod}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<ModEditButton mod={mod}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<ModDeleteButton mod={mod}/>
		</Menu.Item>
	</DrawerMenu>
}
