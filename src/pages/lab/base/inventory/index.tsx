import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BaseFilter} from "@/puff-smith/site/lab/base/inventory/@module/filter/BaseFilter";
import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseInventoryList";
import {BaseListToolbar} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseListToolbar";
import {BaseInventorySourceControlProvider} from "@/sdk/api/base/inventory/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.base.inventory.index"}
		menuSelection={["/lab/base/inventory"]}
		icon={<BaseIcon/>}
	>
		<BaseInventorySourceControlProvider
			defaultSize={10}
		>
			<SelectionProvider type={"multi"}>
				<BaseInventoryList
					header={() => <Space size={"large"}>
						<BaseFilter
							toFilter={filter => ({base: filter})}
						/>
						<BaseListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</BaseInventorySourceControlProvider>
	</LabPage>;
});
