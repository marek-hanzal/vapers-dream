import {FC} from "react";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {VendorPreviewButton} from "@/puff-smith/site/lab/vendor/@module/component/button/VendorPreviewButton";
import {VendorEditButton} from "@/puff-smith/site/lab/vendor/@module/component/button/VendorEditButton";
import {VendorDeleteButton} from "@/puff-smith/site/lab/vendor/@module/component/button/VendorDeleteButton";

export interface IVendorQuickMenuProps extends Partial<IDrawerMenuProps> {
	vendor: VendorDto;
}

export const VendorQuickMenu: FC<IVendorQuickMenuProps> = ({vendor, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.vendor.context.menu', {data: vendor})}
		{...props}
	>
		<Menu.Item>
			<VendorPreviewButton vendor={vendor}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VendorEditButton vendor={vendor}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VendorDeleteButton vendor={vendor}/>
		</Menu.Item>
	</DrawerMenu>
}
