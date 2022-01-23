import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {DatePicker, FormItem} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, InputNumber, Slider} from "antd";
import dayjs from "dayjs";
import {Centered, Submit} from "@leight-core/leight/dist";
import {LiquidSelect} from "@/puff-smith/site/lab/liquid";
import {BaseSelect} from "@/puff-smith/site/lab/base";
import {BoosterSelect} from "@/puff-smith/site/lab/booster";

export interface ICreateMixtureFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateMixtureForm: FC<ICreateMixtureFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		toForm={() => ({
			pg: 50,
			vg: 50,
			nicotine: 6,
			volume: 60,
			mixed: dayjs(),
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.mixture.name.label']}
			required
		/>
		<FormItem
			field={'code'}
			labels={['lab.mixture.code.label']}
			tooltip={t('lab.mixture.code.label.tooltip')}
			required
		/>
		<FormItem
			field={'steep'}
			labels={['lab.mixture.steep.label']}
			tooltip={t('lab.mixture.steep.label.tooltip')}
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={365}
			/>
		</FormItem>
		<FormItem
			field={'pg'}
			labels={['lab.mixture.pg.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'vg'}
			labels={['lab.mixture.vg.label']}
			required
		/>
		<FormItem
			field={'nicotine'}
			labels={['lab.mixture.nicotine.label']}
			required
		>
			<Slider
				marks={{
					0: 0,
					3: 3,
					6: 6,
					9: 9,
					12: 12,
					16: 16,
					18: 18,
					20: 20,
				}}
				min={0}
				max={20}
				step={1}
			/>
		</FormItem>
		<FormItem
			field={'volume'}
			labels={['lab.mixture.volume.label']}
			required
		/>
		<FormItem
			field={'mixed'}
			labels={['lab.mixture.mixed.label']}
			required
		>
			<DatePicker size={'large'} style={{width: '100%'}}/>
		</FormItem>
		<FormItem
			field={'expires'}
			labels={['lab.mixture.expires.label']}
			tooltip={t('lab.mixture.expires.label.tooltip')}
		>
			<DatePicker size={'large'} style={{width: '100%'}}/>
		</FormItem>
		<FormItem
			field={'liquidId'}
			labels={['lab.mixture.liquidId.label']}
			required
		>
			<LiquidSelect/>
		</FormItem>
		<FormItem
			field={'baseId'}
			labels={['lab.mixture.baseId.label']}
		>
			<BaseSelect/>
		</FormItem>
		<FormItem
			field={'boosterId'}
			labels={['lab.mixture.boosterId.label']}
		>
			<BoosterSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.mixture.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
