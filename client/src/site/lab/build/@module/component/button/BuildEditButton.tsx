import {EditIcon} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {PatchBuildForm} from "@/puff-smith/site/lab/build";

export interface IBuildEditButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildEditButton: FC<IBuildEditButtonProps> = ({build, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.build.button.edit'}
		{...props}
	>
		<PatchBuildForm build={build}/>
	</DrawerButton>
}
