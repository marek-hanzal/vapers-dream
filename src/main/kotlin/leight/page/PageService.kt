package leight.page

import io.ktor.application.*
import io.ktor.request.*
import kotlinx.coroutines.runBlocking
import leight.container.AbstractService
import leight.container.IContainer
import leight.mapper.IMapper
import leight.page.dto.PageRequestDto
import leight.page.dto.PageResponseDto
import leight.repository.EntityFilter
import leight.repository.IRepository
import leight.storage.lazyStorage
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable

class PageService(container: IContainer) : AbstractService(container), IPageService {
	private val storage by container.lazyStorage()

	override suspend fun <TTable : UUIDTable, TEntity : UUIDEntity, TResult> page(
		call: ApplicationCall,
		repository: IRepository<TTable, TEntity>,
		mapper: IMapper<TEntity, TResult>,
		filter: EntityFilter<TEntity>?
	): PageResponseDto<TResult> =
		page(call, { repository.total(filter) }, mapper, { page, block ->
			repository.page(page, block, filter)
		})

	fun <TEntity : UUIDEntity, TResult> page(call: ApplicationCall, total: () -> Long, mapper: IMapper<TEntity, TResult>, block: (PageRequestDto, (TEntity) -> Unit) -> Unit) = storage.read {
		PageResponseDto.build<TResult> {
			val paging = runBlocking { call.receive<PageRequestDto>() }
			try {
				this.total = total()
				this.size = paging.limit
				block(paging.validate(this@build.total)) { entity -> items.add(mapper.map(entity)) }
			} catch (e: Exception) {
				throw PageException(e.message ?: "You're making me suffering from huge pain!", e)
			}
		}
	}
}
