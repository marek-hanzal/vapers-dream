import {IBackupRequest, IBackupService} from "@/puff-smith/service/backup/interface";
import {ContainerClass} from "@/puff-smith/service/Container";
import {IJobProgress, ISource, IUser} from "@leight-core/api";
import {zipOf} from "@leight-core/server";
import dayjs from "dayjs";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {Logger} from "winston";

export interface IBackupServiceDeps {
	user: IUser;
	container: ContainerClass;
	jobProgress: IJobProgress;
	logger: Logger;
	temp?: string;
}

export interface IBackupItem<TSource, TEntity> {
	source: TSource;
	entity: TEntity;
}

export const BackupService = (deps: IBackupServiceDeps) => new BackupServiceClass(deps);

export class BackupServiceClass implements IBackupService {
	readonly temp: string;
	readonly container: ContainerClass;
	readonly user: IUser;
	readonly logger: Logger;
	readonly jobProgress: IJobProgress;

	constructor({container, user, logger, jobProgress, temp}: IBackupServiceDeps) {
		this.temp = temp || os.tmpdir();
		this.container = container;
		this.user = user;
		this.logger = logger;
		this.jobProgress = jobProgress;
	}

	async backup(backup: IBackupRequest): Promise<void> {
		return this.container.useFileSource(async fileSource => {
			const stamp = dayjs().format("YYYY-MM-DD");
			fileSource.withUser(this.user);
			const file = await fileSource.store({
				path: "/backup",
				name: `Backup-${stamp}.zip`,
				replace: true,
			});
			const backup = path.normalize(`${this.temp}/backup/${stamp}`);
			fs.mkdirSync(backup, {recursive: true});

			await Promise.all([
				await this.container.useAromaSource(async source => source),
				await this.container.useBaseSource(async source => source),
				await this.container.useBoosterSource(async source => source),
				await this.container.useLiquidSource(async source => source),
				await this.container.useRecipeSource(async source => source),
				await this.container.useTagSource(async source => source),
				await this.container.useTokenSource(async source => source),
				await this.container.useTranslationSource(async source => source),
				await this.container.useUserSource(async source => source),
				await this.container.useVendorSource(async source => source),
			].map(async source => this.export(backup, source)));

			zipOf(backup, file.location);

			fs.rmSync(backup, {recursive: true, force: true});
			await fileSource.refresh(file.id);
			this.logger.debug(`Finished backup of ${file.location}.`);
		});
	}

	async export(backup: string, source: ISource<any, any, any>) {
		const $path = path.normalize(`${backup}/source/${source.name}`);
		fs.mkdirSync($path, {recursive: true});
		const size = 250;
		const total = await source.count({});
		const pages = Math.ceil(total / size);
		for (let page = 0; page <= pages; page++) {
			for (let entity of await source.query({page, size})) {
				fs.writeFileSync(path.normalize(`${$path}/${entity.id}.json`), JSON.stringify({
					source: entity,
					entity: await source.map(entity),
				}));
			}
		}
	}
}
