import {TranslationService} from "@/puff-smith/service/translation/TranslationService";
import {ITranslationBundle} from "@leight-core/api";
import {ListEndpoint} from "@leight-core/server";

export default ListEndpoint<"Translation", ITranslationBundle>(async () => ({
	bundles: [
		{
			language: "cs",
			translations: (await TranslationService().query({
				filter: {
					language: "cs",
				}
			})).items,
		}
	],
}));

