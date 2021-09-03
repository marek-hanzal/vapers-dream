package ps.storage.module.vendor.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.storage.module.vendor.dto.VendorOrderByDto
import ps.storage.module.vendor.entity.VendorEntity
import ps.storage.module.vendor.table.VendorTable

class VendorRepository(container: IContainer) : AbstractRepository<VendorTable, VendorEntity, VendorOrderByDto, Unit>(VendorTable, VendorEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: VendorOrderByDto?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
	}
}

fun IContainer.lazyVendorRepository() = lazy<VendorRepository>()
