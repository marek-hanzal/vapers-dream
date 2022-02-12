import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {Menu} from "antd";
import {AtomizerDeleteButton, AtomizerEditButton, AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {ButtonLink} from "@leight-core/leight/dist";
import {BuildIcon} from "@/puff-smith";

export interface IAtomizerQuickMenuProps extends Partial<IDrawerMenuProps> {
	atomizer: AtomizerDto;
}

export const AtomizerQuickMenu: FC<IAtomizerQuickMenuProps> = ({atomizer, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.atomizer.context.menu', {data: atomizer})}
		{...props}
	>
		<Menu.Item>
			<AtomizerPreviewButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<ButtonLink
				type={'link'}
				size={'large'}
				icon={<BuildIcon/>}
				href={'/lab/build/create'}
				query={{atomizerId: atomizer.id}}
				title={'lab.atomizer.build.create'}
			/>
		</Menu.Item>
		<Menu.Item>
			<AtomizerEditButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<AtomizerDeleteButton atomizer={atomizer}/>
		</Menu.Item>
	</DrawerMenu>
}
