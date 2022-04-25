import {FullLogoIcon, LiquidIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {useMixtureUpdateMutation} from "@/sdk/api/mixture/update";
import {HomeIcon, Template} from "@leight-core/client";
import {Button} from "antd";

export default withMarketLayout(function Index() {
	const mixtureUpdateMutation = useMixtureUpdateMutation();
	return <MarketPage
		title={"market.index"}
		menuSelection={["/market"]}
		icon={<HomeIcon/>}
	>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			label={"market.home"}
			extra={<Button
				size={"large"}
				type={"primary"}
				icon={<LiquidIcon/>}
				onClick={() => mixtureUpdateMutation.mutate()}
				loading={mixtureUpdateMutation.isLoading}
			>Kaboom!</Button>}
		/>
	</MarketPage>;
});
