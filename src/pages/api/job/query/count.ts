import {asyncContainer} from "@/puff-smith/service/Container";
import {JobSource}      from "@/puff-smith/service/job/JobSource";
import {CountEndpoint}  from "@leight-core/server";

export default CountEndpoint({
	name:      "JobCount",
	container: asyncContainer,
	source:    JobSource,
});
