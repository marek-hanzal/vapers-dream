import {VoucherInventoryCreateButton} from "@/puff-smith/site/market/voucher";
import {IVouchersListSourceProps, VouchersListSource} from "@/sdk/api/voucher/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IVoucherListProps extends Partial<IVouchersListSourceProps> {
}

export const VoucherList: FC<IVoucherListProps> = props => {
	const {t} = useTranslation();
	return <VouchersListSource
		itemLayout={"vertical"}
		{...props}
	>
		{voucher => <ListItem key={voucher.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{t("voucher." + voucher.name, voucher.name)}
					<VoucherInventoryCreateButton type={"link"} voucher={voucher}/>
				</Space>}
			/>
		</ListItem>}
	</VouchersListSource>;
};
