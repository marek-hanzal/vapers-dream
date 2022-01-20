import {SignInIcon, Template} from "@leight-core/leight";
import {PublicMenu, PublicPage, SignInForm, withPublicLayout} from "@/puff-smith/site/public";

export default withPublicLayout(function Login() {
	return <PublicPage
		name={"public.sign-in"}
	>
		<PublicMenu/>
		<Template
			icon={<SignInIcon/>}
			label={"public.sign-in.content"}
			span={10}
		>
			<SignInForm/>
		</Template>
	</PublicPage>;
});
