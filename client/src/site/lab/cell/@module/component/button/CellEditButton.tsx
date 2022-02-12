import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {PatchCellForm} from "@/puff-smith/site/lab/cell";

export interface ICellEditButtonProps extends Partial<IDrawerButtonProps> {
	cell: CellDto;
}

export const CellEditButton: FC<ICellEditButtonProps> = ({cell, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.cell.button.edit'}
		{...props}
	>
		<PatchCellForm cell={cell}/>
	</DrawerButton>
}
