import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {ModInventoryList} from "@/puff-smith/site/lab/mod/inventory/@module/list/ModInventoryList";
import {ModInventorySourceControlProvider} from "@/sdk/api/mod/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mod.inventory.index"}
		menuSelection={["/lab/mod/inventory"]}
		icon={<ModIcon/>}
	>
		<ModInventorySourceControlProvider
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<ModInventoryList/>
		</ModInventorySourceControlProvider>
	</LabPage>;
});
