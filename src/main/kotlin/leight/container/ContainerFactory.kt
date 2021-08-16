package leight.container

import leight.http.HttpServer
import leight.http.IHttpServer
import leight.pool.IPool
import leight.pool.Pool
import leight.storage.IStorage
import leight.storage.Storage

object ContainerFactory {
	fun container() = Container().apply {
		registerSystemServices()
		registerStorageServices()
		registerHttpServices()
	}

	private fun IContainer.registerSystemServices() {
		service(IContainer::class) { this }
//		service(IUpgradeManager::class) { UpgradeManager(this) }
//		service(IVersionService::class) { VersionService(this) }
	}

	private fun IContainer.registerStorageServices() {
		service(IStorage::class) { Storage(this) }
		service(IPool::class) { Pool(this) }
	}

	private fun IContainer.registerHttpServices() {
		service(IHttpServer::class) { HttpServer(this) }
//		service(ILinkGenerator::class) { LinkGenerator(this) }
//		service(IPageService::class) { PageService(this) }
//		service(IDiscoveryService::class) { DiscoveryService(this) }
//		service(IRoleService::class) { EmptyRoleService(this) }
	}
}
