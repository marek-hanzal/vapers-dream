import {asyncContainer} from "@/puff-smith/service/Container";
import {FileSource}     from "@/puff-smith/service/file/FileSource";
import {CountEndpoint}  from "@leight-core/server";

export default CountEndpoint({
	name:      "FileCount",
	container: asyncContainer,
	source:    FileSource,
});
