import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/common";
import {BuildFilterDto} from "@/sdk/puff-smith/build/dto";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerSelect";
import {CoilSelect} from "@/puff-smith/site/lab/coil/@module/form/CoilSelect";
import {CottonSelect} from "@/puff-smith/site/lab/cotton/@module/form/CottonSelect";
import {WireSelect} from "@/puff-smith/site/lab/wire/@module/form/WireSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";
import {ModSelect} from "@/puff-smith/site/lab/mod/@module/form/ModSelect";

export type IBuildFilter = 'coilIds';

export interface IBuildFilterProps extends IFilterWithoutTranslationProps<BuildFilterDto> {
	disabled?: IBuildFilter[];
}

export const BuildFilter: FC<IBuildFilterProps> = ({disabled = [], ...props}) => {
	return <Filter<BuildFilterDto>
		{...props}
		translation={'lab.build'}
	>
		<FormItem
			field={'atomizerIds'}
			labels={['lab.build.atomizerId.label']}
		>
			<AtomizerSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'modIds'}
			labels={['lab.build.modId.label']}
		>
			<ModSelect mode={'multiple'} allowClear/>
		</FormItem>
		{!disabled?.includes('coilIds') && <FormItem
			field={'coilIds'}
			labels={['lab.build.coilId.label']}
		>
			<CoilSelect mode={'multiple'} allowClear/>
		</FormItem>}
		<FormItem
			field={'wireIds'}
			labels={['lab.build.wireId.label']}
		>
			<WireSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'cottonIds'}
			labels={['lab.build.cottonId.label']}
		>
			<CottonSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'drawIds'}
			labels={['lab.build.drawIds.label']}
		>
			<DrawSelect/>
		</FormItem>
	</Filter>
}
