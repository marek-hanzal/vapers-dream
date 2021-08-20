package vapersdream.storage.module.role.entity

import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import vapersdream.storage.module.role.table.RoleTable
import vapersdream.upgrade.u2021_08_19.storage.module.role.entity.RoleEntity

class RoleEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<RoleEntity>(RoleTable)

	var name by RoleTable.name
}
