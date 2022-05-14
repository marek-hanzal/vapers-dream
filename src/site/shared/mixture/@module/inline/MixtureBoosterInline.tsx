import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {BoosterInventoryCreateButton} from "@/puff-smith/site/market/booster/@module/button/BoosterInventoryCreateButton";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoolInline} from "@leight-core/client";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IMixtureBoosterInlinePros {
	mixture: IMixture;
	isOwned?: boolean;
}

export const MixtureBoosterInline: FC<IMixtureBoosterInlinePros> = ({mixture, isOwned}) => {
	return mixture.booster ? <Space size={4} split={"-"}>
		<Typography.Text>{mixture.boosterCount}x</Typography.Text>
		<BoosterNameInline booster={mixture.booster}/>
		<PgVgInline pgvg={mixture.booster}/>
		{isOwned ? <BoolInline bool={isOwned}/> : <BoosterInventoryCreateButton type={"link"} booster={mixture.booster}/>}
	</Space> : null;
};
