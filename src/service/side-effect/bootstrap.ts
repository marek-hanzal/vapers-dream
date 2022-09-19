import {IMPORT_JOB} from "@/puff-smith/jobs/import/interface";
import {BootstrapLogger} from "@leight-core/server";

const Bootstrap = (version: string = process.env.NEXT_PUBLIC_VERSION || "edge") => {
	BootstrapLogger({
		loggers: [
			"job",
			"service",
			"endpoint",
			"auth",
			"query",
			IMPORT_JOB,
		],
		version,
		level: "debug",
	});
};

Bootstrap();
