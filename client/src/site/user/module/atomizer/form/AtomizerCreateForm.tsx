import {AtomizerIcon, ps} from "@/ps";
import {CoilsBaseSelect, CoilSizeSelect} from "@/ps/site/user/module/atomizer";
import {VendorSelect} from "@/ps/site/user/module/vendor";
import {Centered, Form, FormItem, IFormProps, Submit, SwitchItem} from "@leight-core/leight";
import {InputNumber} from "antd";
import {FC} from "react";

const doCreate = ps.user.atomizer.doCreate;
type CreateDto = ps.user.atomizer.CreateDto;
type AtomizerDto = ps.atomizer.AtomizerDto;

export interface IAtomizerCreateFormProps extends Partial<IFormProps<CreateDto, AtomizerDto>> {
}

export const AtomizerCreateForm: FC<IAtomizerCreateFormProps> = props => {
	return <Form<CreateDto, AtomizerDto>
		post={doCreate}
		initialValues={{
			coils: 1,
			maxCoilSize: 25,
			maxWraps: 12,
		}}
		{...props}
	>
		<FormItem field={"name"} labels={["user.atomizer.name.label"]} required tooltip={"user.atomizer.name.label.tooltip"}/>
		<FormItem field={"code"} labels={["user.atomizer.code.label"]} required tooltip={"user.atomizer.code.label.tooltip"}/>
		<FormItem field={"vendorId"} labels={["user.atomizer.vendor.label"]} required tooltip={"user.atomizer.vendor.label.tooltip"}>
			<VendorSelect category={"atomizer"}/>
		</FormItem>
		<FormItem field={"coils"} labels={["user.atomizer.coils.label"]} tooltip={"user.atomizer.coils.label.tooltip"}>
			<CoilsBaseSelect/>
		</FormItem>
		<FormItem field={"capacity"} labels={["user.atomizer.capacity.label"]} tooltip={"user.atomizer.capacity.label.tooltip"}>
			<InputNumber
				step={0.5}
				min={0}
				max={14}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"maxCoilSize"} labels={["user.atomizer.max-coil-size.label"]} tooltip={"user.atomizer.max-coil-size.label.tooltip"}>
			<CoilSizeSelect/>
		</FormItem>
		<FormItem field={"maxWraps"} labels={["user.atomizer.max-wraps.label"]} tooltip={"user.atomizer.max-wraps.label.tooltip"}>
			<InputNumber
				step={1}
				min={0}
				max={24}
				style={{width: "100%"}}
			/>
		</FormItem>
		<SwitchItem field={"squonk"} labels={["user.atomizer.squonk.label"]} tooltip={"user.atomizer.squonk.label.tooltip"}/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} size={"large"} label={"user.atomizer.create.label"}/>
		</Centered>
	</Form>;
};
