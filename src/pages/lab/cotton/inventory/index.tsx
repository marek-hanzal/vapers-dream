import {CottonIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CottonInventoryList} from "@/puff-smith/site/lab/cotton/inventory";
import {CottonsSourceControlProvider} from "@/sdk/api/cotton/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cotton.inventory.index"}
		menuSelection={["/lab/cotton/inventory"]}
		icon={<CottonIcon/>}
	>
		<CottonsSourceControlProvider>
			<CottonInventoryList/>
		</CottonsSourceControlProvider>
	</LabPage>;
});
