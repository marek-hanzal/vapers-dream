import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/client";
import {FileOutlined} from "@ant-design/icons";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.file"}
		menuSelection={['/root/file']}
		icon={<FileOutlined/>}
	>
		<Template>
		</Template>
	</RootPage>;
});
