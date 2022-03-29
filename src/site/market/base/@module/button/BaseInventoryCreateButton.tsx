import {FC} from "react";
import {IBase} from "@/puff-smith/service/base";
import {useCreateMutation} from "@/sdk/api/base/inventory/create";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";

export interface IBaseInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	base: IBase;
}

export const BaseInventoryCreateButton: FC<IBaseInventoryCreateButtonProps> = ({base, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={'market.base'}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			baseId: base.id,
		})}
		cost={base.cost}
		{...props}
	/>
}
