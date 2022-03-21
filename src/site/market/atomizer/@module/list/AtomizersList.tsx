import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {AtomizersListSource, IAtomizersListSourceProps} from "@/sdk/api/atomizer/query";
import {AtomizerTransactionCreateButton} from "@/puff-smith/site/market/atomizer";

export interface IAtomizersListProps extends Partial<IAtomizersListSourceProps> {
}

export const AtomizersList: FC<IAtomizersListProps> = props => {
	return <AtomizersListSource
		itemLayout={'vertical'}
		{...props}
	>
		{atomizer => <ListItem key={atomizer.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{atomizer.name}
					<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text>
					<AtomizerTransactionCreateButton type={'link'} atomizer={atomizer}/>
				</Space>}
			/>
		</ListItem>}
	</AtomizersListSource>;
}
