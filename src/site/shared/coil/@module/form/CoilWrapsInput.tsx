import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {Slider} from "antd";
import {FC} from "react";

export const CoilWrapsInput: FC = props => {
	return <Slider
		min={3}
		max={16}
		step={1}
		marks={{
			"3": 3,
			"4": 4,
			"5": 5,
			"6": 6,
			"7": 7,
			"8": 8,
			"9": 9,
			"10": 10,
			"11": 11,
			"12": 12,
			"13": 13,
			"14": 14,
			"15": 15,
			"16": <CoilWraps wraps={16}/>,
		}}
		{...props}
	/>;
};
