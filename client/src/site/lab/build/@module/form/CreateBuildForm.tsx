import {CreateDefaultForm, ICreateDefaultFormProps, useBuildsQueryInvalidate, useOhmMutation} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC, ReactNode, useState} from "react";
import {ButtonBar, Card, Centered, DatePicker, FormItem, ItemGroup, Submit, SwitchItem, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Col, Divider, InputNumber, message, Row, Spin} from "antd";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {AtomizerTooltip} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerTooltip";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerSelect";
import {CoilCountInput} from "@/puff-smith/site/lab/build/@module/form/input/CoilCountInput";
import {CottonTooltip} from "@/puff-smith/site/lab/cotton/@module/form/CottonTooltip";
import {CottonSelect} from "@/puff-smith/site/lab/cotton/@module/form/CottonSelect";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";
import {ModTooltip} from "@/puff-smith/site/lab/mod/@module/form/ModTooltip";
import {ModSelect} from "@/puff-smith/site/lab/mod/@module/form/ModSelect";
import {WireTooltip} from "@/puff-smith/site/lab/wire/@module/form/WireTooltip";
import {WireSelect} from "@/puff-smith/site/lab/wire/@module/form/WireSelect";
import {WrapsInput} from "@/puff-smith/site/lab/coil/@module/form/input/WrapsInput";
import {SizeInput} from "@/puff-smith/site/lab/coil/@module/form/input/SizeInput";

export interface ICreateBuildFormProps extends Partial<ICreateDefaultFormProps> {
	build?: BuildDto
	buttons?: ReactNode;
}

export const CreateBuildForm: FC<ICreateBuildFormProps> = ({build, buttons, onSuccess, onValuesChange, ...props}) => {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	const [values, setValues] = useState<any>();

	const ohmMutation = useOhmMutation();

	const canCoil = values?.atomizerId && values?.cottonId;
	const cacAdvanced = canCoil && values?.coil?.wireId;

	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.build'}
		toForm={() => ({
			atomizerId,
			coils: 1,
			coilOffset: 0,
			cottonOffset: 0,
			glow: 3,
			coil: {
				wraps: 7,
				size: 0.3,
				spaced: false,
			},
			...build,
			created: moment(),
			name: null,
			description: null,
			deactivate: true,
		})}
		onSuccess={response => {
			message.success(t("lab.build.created.message", {data: response.response}));
			buildsQueryInvalidate();
			onSuccess?.(response);
		}}
		onValuesChange={change => {
			const values = change.values;
			setValues(values);
			values?.coil?.wireId && values?.coil?.wraps && values?.coil?.size && ohmMutation.mutate({
				wireId: values?.coil?.wireId,
				wraps: values?.coil?.wraps,
				size: values?.coil?.size,
			}, {
				onSuccess: ohm => {
					change.formContext.setValues({
						ohm,
					});
				},
			})
			onValuesChange?.(change);
		}}
		toError={({error}) => ({
			"Duplicate entry [z_build_name_unique] of [z_build].": {id: ["name"], error},
		})}
		{...props}
	>
		<Row gutter={16}>
			<Col sm={24} md={24} lg={8}>
				<Card title={t('lab.build.build.title')}>
					<FormItem
						field={'atomizerId'}
						required
						help={<AtomizerTooltip/>}
					>
						<AtomizerSelect allowClear/>
					</FormItem>
					<FormItem
						field={'cottonId'}
						required
						help={<CottonTooltip/>}
					>
						<CottonSelect allowClear/>
					</FormItem>
					<FormItem
						field={'modId'}
						hasTooltip
						help={<ModTooltip/>}
					>
						<ModSelect allowClear/>
					</FormItem>
					<FormItem
						field={'driptipId'}
						hasTooltip
						help={<DriptipTooltip/>}
					>
						<DriptipSelect allowClear/>
					</FormItem>
				</Card>
			</Col>
			<Col sm={24} md={24} lg={8}>
				<Card title={t('lab.build.coil.title')}>
					<Spin spinning={!canCoil} indicator={<></>}>
						<ItemGroup
							translation={'lab'}
							prefix={'coil'}
						>
							<FormItem
								field={'wireId'}
								required
								help={<WireTooltip/>}
							>
								<WireSelect allowClear/>
							</FormItem>
							<FormItem
								field={'wraps'}
								hasTooltip
							>
								<WrapsInput/>
							</FormItem>
							<FormItem
								field={'size'}
							>
								<SizeInput/>
							</FormItem>
							<SwitchItem
								field={'spaced'}
							/>
						</ItemGroup>
					</Spin>
				</Card>
			</Col>
			<Col sm={24} md={24} lg={8}>
				<Card title={t('lab.build.advanced.title')}>
					<Spin spinning={!cacAdvanced} indicator={<></>}>
						<FormItem
							field={'coils'}
						>
							<CoilCountInput/>
						</FormItem>
						<FormItem
							field={'ohm'}
						>
							<InputNumber style={{width: '100%'}} min={0} max={4}/>
						</FormItem>
						<FormItem
							field={'drawIds'}
						>
							<DrawSelect/>
						</FormItem>
						<SwitchItem
							field={'deactivate'}
							hasTooltip
						/>
						<FormItem
							field={'created'}
						>
							<DatePicker showTime/>
						</FormItem>
					</Spin>
				</Card>
			</Col>
		</Row>
		<Divider/>
		<Centered>
			<ButtonBar align={'baseline'}>
				<Submit icon={<BuildIcon/>} label={'create.submit'}/>
				{buttons}
			</ButtonBar>
		</Centered>
	</CreateDefaultForm>;
}
