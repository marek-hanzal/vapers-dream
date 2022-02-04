import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {PgSlider, VgSlider} from "@/puff-smith/component/input";
import {LiquidIcon} from "@/puff-smith";

export interface ICreateLiquidFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateLiquidForm: FC<ICreateLiquidFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		layout={'vertical'}
		toForm={() => ({
			pg: 50,
			vg: 50,
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.liquid.created.message", {data: response}));
			navigate("/lab/liquid/list");
		}}
		toError={({error}) => ({
			"Duplicate entry [z_liquid_name_unique] of [z_liquid].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.liquid.name.label']}
			required
		/>
		<FormItem
			field={'description'}
			labels={['lab.liquid.description.label']}
		>
			<TextArea autoSize={{minRows: 6, maxRows: 6}}/>
		</FormItem>
		<FormItem
			field={'vendorId'}
			labels={['lab.liquid.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<FormItem
			field={'pg'}
			labels={['lab.liquid.pg.label']}
			rules={[
				({setFieldsValue}) => ({
					validator(_, value) {
						setFieldsValue({
							'vg': 100 - value,
						});
						return Promise.resolve();
					},
				}),
			]}
		>
			<PgSlider/>
		</FormItem>
		<FormItem
			field={'vg'}
			labels={['lab.liquid.vg.label']}
			rules={[
				({setFieldsValue}) => ({
					validator(_, value) {
						setFieldsValue({
							'pg': 100 - value,
						});
						return Promise.resolve();
					},
				}),
			]}
		>
			<VgSlider/>
		</FormItem>
		<FormItem
			field={'volume'}
			labels={['lab.liquid.volume.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={'lab.liquid.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
