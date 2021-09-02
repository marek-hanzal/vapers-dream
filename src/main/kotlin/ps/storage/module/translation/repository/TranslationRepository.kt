package ps.storage.module.translation.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.UnknownEntityException
import leight.utils.sha256
import org.jetbrains.exposed.sql.and
import ps.storage.module.translation.entity.TranslationEntity
import ps.storage.module.translation.table.TranslationTable

class TranslationRepository(container: IContainer) : AbstractRepository<TranslationTable, TranslationEntity, Unit>(TranslationTable, TranslationEntity, container) {
	fun findByLanguageAndLabel(language: String, label: String): TranslationEntity =
		entity.find { table.language eq language and (table.hash eq label.sha256()) }.firstOrNull() ?: throw UnknownEntityException("Requested entity [${entity::class}] with language [${language}] and label [${label}] does not exists.")
}

fun IContainer.lazyTranslationRepository() = lazy<TranslationRepository>()
