import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AtomizerFilter} from "@/puff-smith/site/market/atomizer/@module/filter/AtomizerFilter";
import {AtomizerList} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerList";
import {AtomizerListToolbar} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerListToolbar";
import {AtomizerCreateButton} from "@/puff-smith/site/shared/atomizer/@module/button/AtomizerCreateButton";
import {AtomizerProviderControl} from "@/sdk/api/atomizer/query";
import {SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.atomizer.index"}
		menuSelection={["/market/atomizer"]}
		icon={<AtomizerIcon/>}
		extra={<AtomizerCreateButton/>}
	>
		<AtomizerProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<AtomizerList
					header={() => <RowInline
						extra={<AtomizerListToolbar/>}
					>
						<AtomizerFilter/>
					</RowInline>}
				/>
			</SelectionProvider>
		</AtomizerProviderControl>
	</MarketPage>;
});
