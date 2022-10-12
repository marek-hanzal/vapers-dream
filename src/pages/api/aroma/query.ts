import {AromaSource}    from "@/puff-smith/service/aroma/AromaSource";
import {asyncContainer} from "@/puff-smith/service/Container";
import {QueryEndpoint}  from "@leight-core/server";

export default QueryEndpoint({
	name:      "Aroma",
	container: asyncContainer,
	source:    AromaSource,
});
