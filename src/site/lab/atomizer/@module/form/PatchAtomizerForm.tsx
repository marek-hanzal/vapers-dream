import {IPatchDefaultFormProps, PatchDefaultForm, useAtomizerQueryInvalidate, useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/common";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {AtomizerIcon} from "@/puff-smith";
import {VendorTooltip} from "@/puff-smith/site/lab/vendor/@module/form/VendorTooltip";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";
import {AtomizerTypeSelect} from "@/puff-smith/component/input/AtomizerTypeSelect";

export interface IPatchAtomizerFormProps extends Partial<IPatchDefaultFormProps> {
	atomizer: AtomizerDto;
}

export const PatchAtomizerForm: FC<IPatchAtomizerFormProps> = ({atomizer, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const atomizerQueryInvalidate = useAtomizerQueryInvalidate();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.atomizer'}
		onSuccess={response => {
			message.success(t("lab.atomizer.update.message", {data: response.response}));
			atomizerQueryInvalidate();
			atomizersQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			...atomizer,
		})}
		toMutation={values => ({
			...values,
			...{id: atomizer.id}
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<SwitchItem
			field={'dual'}
		/>
		<FormItem
			field={'drawIds'}
		>
			<DrawSelect/>
		</FormItem>
		<FormItem
			field={'typeId'}
		>
			<AtomizerTypeSelect/>
		</FormItem>
		<FormItem
			field={'coilMin'}
			hasTooltip
		>
			<InputNumber style={{width: '100%'}} min={0.1} max={0.6}/>
		</FormItem>
		<FormItem
			field={'coilMax'}
			hasTooltip
		>
			<InputNumber style={{width: '100%'}} min={0.2} max={0.6}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
