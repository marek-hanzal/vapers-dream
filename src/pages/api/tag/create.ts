import {asyncContainer} from "@/puff-smith/service/Container";
import {TagSource}      from "@/puff-smith/service/tag/TagSource";
import {CreateEndpoint} from "@leight-core/viv";

export default CreateEndpoint({
	name:      "TagCreate",
	container: asyncContainer,
	source:    TagSource,
});
