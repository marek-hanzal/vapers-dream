import {FC} from "react";
import {IUsersSourceSelectProps, UsersSourceControlProvider, UsersSourceSelect} from "@/sdk/api/user/query";

export interface IUserSelectProps extends Partial<IUsersSourceSelectProps> {
}

export const UserSelect: FC<IUserSelectProps> = props => {
	return <UsersSourceControlProvider>
		<UsersSourceSelect
			showSearch
			toOption={user => ({
				label: user.name,
				value: user.id,
			})}
			{...props}
		/>
	</UsersSourceControlProvider>
}
