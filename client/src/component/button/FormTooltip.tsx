import {FC, ReactNode} from "react";
import {CreateTemplate, DrawerButton} from "@leight-core/leight";
import {PlusOutlined} from "@ant-design/icons";
import {IDrawerButtonProps} from "@leight-core/leight/dist";

export interface IFormTooltipProps extends Partial<IDrawerButtonProps> {
	icon: ReactNode
	label: string
}

export const FormTooltip: FC<IFormTooltipProps> = ({icon, label, children, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'middle'}
		icon={<PlusOutlined/>}
		title={label + '.tooltip.create'}
		width={700}
		{...props}
	>
		<CreateTemplate
			icon={icon}
			label={label}
			span={24}
		>
			{children}
		</CreateTemplate>
	</DrawerButton>
}
