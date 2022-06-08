import {IMigration} from "@/puff-smith/cli/migration";
import {OhmService} from "@/puff-smith/service/ohm/OhmService";

export const BuildComputation: IMigration = {
	name: "BuildComputation",
	up: async ({context: prisma}) => {
		const builds = await prisma.build.findMany();
		const ohmService = OhmService();
		for (const build of builds) {
			const drain = ohmService.toAmps(3.7, build.ohm.toNumber());
			const watts = ohmService.toWatt(3.7, drain);
			await prisma.build.update({
				where: {id: build.id},
				data: {
					drain,
					watts,
				}
			});
		}
	}
};
