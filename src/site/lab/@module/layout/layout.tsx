import {NotificationProvider} from "@/puff-smith";
import {Footer, Header} from "@/puff-smith/site/lab";
import {AppLayout} from "@/puff-smith/site/shared";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout} from "@leight-core/client";
import {FC} from "react";

export interface ILabLayoutProps {
}

export const LabLayout: FC<ILabLayoutProps> = props => {
	return <AppLayout>
		<NotificationProvider>
			<ApplicationLayout
				header={<Header/>}
				footer={<Footer/>}
				{...props}
			/>
		</NotificationProvider>
	</AppLayout>;
};

export function withLabLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <LabLayout>
			{children}
		</LabLayout>;
	};
	return Component;
}
