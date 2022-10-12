import {asyncContainer} from "@/puff-smith/service/Container";
import {VendorSource}   from "@/puff-smith/service/vendor/VendorSource";
import {QueryEndpoint}  from "@leight-core/server";

export default QueryEndpoint({
	name:      "Vendor",
	container: asyncContainer,
	source:    VendorSource,
});
