import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {EmailButton} from "@/puff-smith/site/public/component/button/EmailButton";
import {GithubButton} from "@/puff-smith/site/public/component/button/GithubButton";
import {PublicPage} from "@/puff-smith/site/public/component/PublicPage";
import {withPublicLayout} from "@/puff-smith/site/public/layout/layout";
import {BrowserContent, Card, Centered, MobileContent, Template} from "@leight-core/client";
import {numbersOf} from "@leight-core/utils";
import {Col, Divider, Row, Space, Typography} from "antd";
import {Trans, useTranslation} from "react-i18next";

export default withPublicLayout(function Index() {
	const {t} = useTranslation();
	return <PublicPage
		title={"public.index"}
		menuSelection={["/public"]}
	>
		<BrowserContent>
			<Template
				icon={<FullLogoIcon height={200} style={{width: "300px"}}/>}
			>
				<Row gutter={32}>
					<Col span={11}>
						{numbersOf(2).map(index => <Card key={"intro-item-" + index} title={t(`public.intro.item.${index}.title`)}>
							<Typography.Paragraph>
								<Trans i18nKey={`public.intro.item.${index}.content`}/>
							</Typography.Paragraph>
						</Card>)}
					</Col>
					<Col span={11}>
						<Card title={t("public.intro.login.title")}>
							<Typography.Paragraph>
								<Trans i18nKey={"public.intro.login.content"}/>
							</Typography.Paragraph>
							<Divider/>
							<Space size={0} direction={"vertical"} split={<Divider/>}>
								<EmailButton/>
								<GithubButton/>
							</Space>
						</Card>
					</Col>
				</Row>
			</Template>
		</BrowserContent>
		<MobileContent>
			<Template
				forceIcon
				icon={<FullLogoIcon height={200} style={{width: "300px"}}/>}
			>
				<div style={{marginBottom: "2em"}}>
					<Centered>
						<GithubButton/>
					</Centered>
				</div>
			</Template>
		</MobileContent>
	</PublicPage>;
});
