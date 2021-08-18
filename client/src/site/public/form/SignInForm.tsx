import {useSessionContext} from "@/vapers-dream";
import {vapersdream} from "@/vapers-dream/sdk";
import {Centered, CommonForm, FormItem, FormSubmitButton, ICommonFormProps, Input, PasswordInput, SignInIcon, useLayoutBlockContext} from "@leight-core/leight";
import {FC} from "react";

export interface ISignInFormProps extends Partial<ICommonFormProps<any, vapersdream.session.LoginDto, vapersdream.session.SessionDto>> {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {setSession} = useSessionContext();
	const blockContext = useLayoutBlockContext();
	return <CommonForm<any, vapersdream.session.LoginDto, vapersdream.session.SessionDto>
		name={"sign-in"}
		post={vapersdream.session.doLogin}
		size={"large"}
		wrapperCol={{span: 24}}
		onSuccess={(navigate, values, session) => {
			blockContext.block();
			setSession(session);
			navigate("/" + session.site);
		}}
		{...props}
	>
		<FormItem
			field={"login"}
			required
		>
			<Input autoComplete={"username"}/>
		</FormItem>
		<FormItem
			field={"password"}
		>
			<PasswordInput autoComplete={"current-password"}/>
		</FormItem>
		<Centered>
			<FormSubmitButton icon={<SignInIcon/>} size={"large"} label={"public.sign-in.form.submit.label"}/>
		</Centered>
	</CommonForm>;
};
