import {IWiresSourceSelectProps, WiresSourceSelect} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {WireInline} from "@/puff-smith/site/lab/wire/@module/component/WireInline";

export interface IWireSelectProps extends Partial<IWiresSourceSelectProps> {
}

export const WireSelect: FC<IWireSelectProps> = props => {
	return <WiresSourceSelect
		showSearch
		optionLabelProp={'name'}
		toOption={wire => ({
			label: <WireInline wire={wire}/>,
			value: wire.id,
			...wire
		})}
		{...props}
	/>
}
