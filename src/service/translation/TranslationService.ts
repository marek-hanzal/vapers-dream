import {ITranslationService} from "@/puff-smith/service/translation/interface";
import prisma from "@/puff-smith/service/prisma";
import {handleUniqueException, RepositoryService} from "@leight-core/server";
import {sha256} from "@/puff-smith/service/sha256";
import {IPrismaClientTransaction} from "@leight-core/api";

export const TranslationService = (prismaClient: IPrismaClientTransaction = prisma): ITranslationService => RepositoryService<ITranslationService>({
	name: 'translation',
	source: prismaClient.translation,
	mapper: async translation => ({
		key: translation.label,
		value: translation.text,
	}),
	create: async create => {
		const hash = sha256(create.label);
		try {
			return await prismaClient.translation.create({
				data: {
					...create,
					hash,
				}
			})
		} catch (e) {
			return handleUniqueException(e, async () => prismaClient.translation.update({
				where: {
					language_hash: {
						hash,
						language: create.language,
					},
				},
				data: create,
			}));
		}
	}
})
