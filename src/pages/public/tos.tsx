import {BrowserPublicPage} from "@/puff-smith/site/public/component/BrowserPublicPage";
import {withPublicLayout}  from "@/puff-smith/site/public/layout/layout";
import {Template}          from "@leight-core/viv";
import {Trans}             from "react-i18next";

export default withPublicLayout(function Index() {
	return <BrowserPublicPage
		title={"public.tos"}
		menuSelection={["/public/tos"]}
	>
		<Template>
			<Trans i18nKey={"public.tos.content"}/>
		</Template>
	</BrowserPublicPage>;
});
