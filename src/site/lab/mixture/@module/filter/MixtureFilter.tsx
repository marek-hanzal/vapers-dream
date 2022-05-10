import {AromaTasteSelect} from "@/puff-smith/site/lab/aroma/inventory/@module/form/AromaTasteSelect";
import {MixtureAromaSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureAromaSelect";
import {MixtureBaseSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBaseSelect";
import {MixtureBoosterSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBoosterSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureRatioSelect";
import {MixtureVendorSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureVendorSelect";
import {MixtureSourceControlProvider, MixtureSourceFilter} from "@/sdk/api/mixture/inventory/mixture/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC, useRef} from "react";

export interface IMixtureFilterProps extends Partial<IFilterProps> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const ratio = useRef<{ pgToRound: number, vgToRound: number }>();

	const onClear = () => {
		ratio.current = undefined;
	};

	return <MixtureSourceFilter
		spaceProps={{
			size: 0,
		}}
		onClear={onClear}
		toFilter={({tasteIds, vendorId, aromaId, boosterId, baseId, nicotine}) => toFilter({
			aromaId,
			aroma: {
				vendorId,
				AromaTaste: {
					some: {
						tasteId: {
							in: tasteIds,
						},
					},
				},
			},
			boosterId,
			baseId,
			nicotineToRound: nicotine,
			...ratio.current,
		})}
		{...props}
	>
		<MixtureSourceControlProvider>
			<FormItem field={"aromaId"}>
				<MixtureAromaSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"tasteIds"}>
				<AromaTasteSelect
					allowClear
					mode={"multiple"}
				/>
			</FormItem>
			<FormItem field={"vendorId"}>
				<MixtureVendorSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"boosterId"}>
				<MixtureBoosterSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"baseId"}>
				<MixtureBaseSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"ratio"}>
				<MixtureRatioSelect
					allowClear
					onClear={() => {
						ratio.current = undefined;
					}}
					onSelect={({entity}) => {
						ratio.current = {pgToRound: entity.pg, vgToRound: entity.vg};
					}}
				/>
			</FormItem>
			<FormItem field={"nicotine"}>
				<MixtureNicotineSelect
					allowClear
				/>
			</FormItem>
		</MixtureSourceControlProvider>
	</MixtureSourceFilter>;
};
