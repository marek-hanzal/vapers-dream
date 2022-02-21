import {Centered, Form, FormItem, IFormProps, Input, PasswordInput, SignInIcon, Submit} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ILoginRequest} from "@/sdk/shared/user/login";
import {ISession} from "@leight-core/leight/dist";

export interface ISignInFormProps extends Partial<IFormProps<void, ILoginRequest, ISession>> {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {t} = useTranslation();
	return <Form<void, ILoginRequest, ISession>
		// useMutation={useLoginMutation}
		size={"large"}
		onSuccess={({navigate, response}) => {
			navigate("/" + response.user.site);
		}}
		toError={() => ({
			"Unknown login": (({formContext}) => {
				formContext.setErrors({
					errors: [
						{id: "login", error: "Who are you?"},
					],
				});
			})
		})}
		{...props}
	>
		<FormItem
			field={"login"}
			required
			rules={[
				{required: true, whitespace: false, message: t("public.sign-in.login.required")},
			]}
		>
			<Input autoFocus autoComplete={"username"}/>
		</FormItem>
		<FormItem
			field={"password"}
			required
		>
			<PasswordInput autoComplete={"current-password"}/>
		</FormItem>
		<Centered>
			<Submit icon={<SignInIcon/>} size={"large"} label={"public.sign-in.form.submit.label"}/>
		</Centered>
	</Form>;
};
