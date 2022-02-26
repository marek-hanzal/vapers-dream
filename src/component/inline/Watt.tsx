import {FC} from "react";
import {toHumanNumber} from "@leight-core/common";

export interface IWattProps {
	watt?: number | null;
}

export const Watt: FC<IWattProps> = ({watt}) => {
	return <>{watt ? toHumanNumber(watt, 3) + 'W' : '-'}</>
}
