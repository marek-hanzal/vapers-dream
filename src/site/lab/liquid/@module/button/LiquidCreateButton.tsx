import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateView} from "@/puff-smith/site/lab/liquid";
import {useCheckPrice} from "@/puff-smith/site/shared/price";
import {DrawerButton, FilterProvider, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = props => {
	const checkPrice = useCheckPrice("lab.liquid.create");
	return <DrawerButton
		size={"large"}
		type={"primary"}
		ghost
		icon={<LiquidIcon/>}
		title={"lab.liquid.create.title"}
		loading={checkPrice.loading && {
			delay: 75,
		}}
		width={800}
		disabled={checkPrice.notPass}
		{...props}
	>
		<FilterProvider name={"LiquidCreateButton"}>
			<LiquidCreateView/>
		</FilterProvider>
	</DrawerButton>;
};
