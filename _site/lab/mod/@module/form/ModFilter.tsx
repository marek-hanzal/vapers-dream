import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/common";
import {ModFilterDto} from "@/sdk/puff-smith/mod/dto";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";
import {CellTypeSelect} from "@/puff-smith/component/input/CellTypeSelect";

export interface IModFilterProps extends IFilterWithoutTranslationProps<ModFilterDto> {
}

export const ModFilter: FC<IModFilterProps> = props => {
	return <Filter<ModFilterDto>
		translation={'lab.mod'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.mod.name.label']}
		/>
		<FormItem
			field={'voucherTypeIds'}
			labels={['lab.mod.voucherTypeIds.label']}
		>
			<CellTypeSelect/>
		</FormItem>
		<FormItem
			field={'vendorIds'}
			labels={['lab.mod.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
