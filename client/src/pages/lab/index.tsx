import {useTranslation} from "react-i18next";
import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.home"}
	>
		<LabMenu/>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			label={t("lab.home")}
		/>
	</LabPage>;
});
