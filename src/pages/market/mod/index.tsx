import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {ModFilter} from "@/puff-smith/site/market/mod/@module/filter/ModFilter";
import {ModList} from "@/puff-smith/site/market/mod/@module/list/ModList";
import {ModListToolbar} from "@/puff-smith/site/market/mod/@module/list/ModListToolbar";
import {ModProviderControl} from "@/sdk/api/mod/query";
import {SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.mod.index"}
		menuSelection={["/market/mod"]}
		icon={<ModIcon/>}
	>
		<ModProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<ModList
					header={() => <RowInline
						extra={<ModListToolbar/>}
					>
						<ModFilter/>
					</RowInline>}
				/>
			</SelectionProvider>
		</ModProviderControl>
	</MarketPage>;
});
