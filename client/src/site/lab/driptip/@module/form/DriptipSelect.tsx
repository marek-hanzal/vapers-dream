import {IDriptipsSourceSelectProps, DriptipsSourceSelect} from "@/sdk/puff-smith/api/lab/driptip/endpoint";
import {FC} from "react";
import {DriptipInline} from "@/puff-smith/site/lab/driptip";

export interface IDriptipSelectProps extends Partial<IDriptipsSourceSelectProps> {
}

export const DriptipSelect: FC<IDriptipSelectProps> = props => {
	return <DriptipsSourceSelect
		showSearch
		toOption={driptip => ({
			label: <DriptipInline driptip={driptip}/>,
			value: driptip.id,
		})}
		{...props}
	/>
}
