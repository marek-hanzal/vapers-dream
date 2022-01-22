import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {AtomizerSelect, AtomizerTooltip} from "@/puff-smith/site/lab/atomizer";
import {Divider, InputNumber, Slider} from "antd";
import {CoilSelect, CoilTooltip} from "@/puff-smith/site/lab/coil";
import {CottonSelect, CottonTooltip} from "@/puff-smith/site/lab/cotton";

export interface ICreateBuildFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateBuildForm: FC<ICreateBuildFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		toForm={() => ({
			coils: 1,
			coil: 0,
			cotton: 0,
		})}
		{...props}
	>
		<FormItem field={'name'} labels={['lab.build.name.label']} tooltip={t('lab.build.name.label.tooltip')} required/>
		<FormItem
			field={'description'}
			labels={['lab.build.description.label']}
		/>
		<FormItem
			field={'atomizerId'}
			labels={['lab.build.atomizerId.label']}
			required
			help={<AtomizerTooltip/>}
		>
			<AtomizerSelect/>
		</FormItem>
		<FormItem
			field={'ohm'}
			labels={['lab.build.ohm.label']}
			required
		>
			<InputNumber style={{width: '100%'}} min={0} max={4}/>
		</FormItem>
		<Divider/>
		<FormItem
			field={'coilId'}
			labels={['lab.build.coilId.label']}
			required
			help={<CoilTooltip/>}
		>
			<CoilSelect/>
		</FormItem>
		<FormItem
			field={'coils'}
			labels={['lab.build.coils.label']}
		>
			<Slider
				included={false}
				tipFormatter={null}
				marks={{
					1: 1,
					2: 2,
					3: 3,
					4: 4,
				}}
				min={1}
				max={4}
				step={null}
			/>
		</FormItem>
		<FormItem
			field={'coil'}
			labels={['lab.build.coil.label']}
			tooltip={t('lab.build.coil.label.tooltip')}
		>
			<Slider
				included={false}
				tipFormatter={null}
				marks={{
					"-2": -2,
					"-1": -1,
					"0": 0,
					"1": 1,
					"2": 2,
				}}
				min={-2}
				max={2}
			/>
		</FormItem>
		<Divider/>
		<FormItem
			field={'cottonId'}
			labels={['lab.build.cottonId.label']}
			required
			help={<CottonTooltip/>}
		>
			<CottonSelect/>
		</FormItem>
		<FormItem
			field={'cotton'}
			labels={['lab.build.cotton.label']}
			tooltip={t('lab.build.cotton.label.tooltip')}
		>
			<Slider
				included={false}
				tipFormatter={null}
				marks={{
					"-2": -2,
					"-1": -1,
					"0": 0,
					"1": 1,
					"2": 2,
				}}
				min={-2}
				max={2}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.build.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
