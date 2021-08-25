package ps

import leight.container.AbstractService
import leight.container.IContainer
import leight.http.HttpServerConfig
import leight.http.lazyHttpServer
import leight.pool.PoolConfig
import leight.upgrade.lazyUpgradeManager
import leight.upgrade.lazyVersionService
import leight.utils.asStamp
import ps.translation.lazyTranslationCsvImport
import ps.vendor.lazyVendorCsvImport
import kotlin.system.measureTimeMillis
import kotlin.time.ExperimentalTime

data class ServerConfig(
	val version: String = "dev",
	val pool: PoolConfig,
	val httpServer: HttpServerConfig
)

class Server(container: IContainer) : AbstractService(container) {
	private val serverConfig by container.lazyServerConfig()
	private val upgradeManager by container.lazyUpgradeManager()
	private val versionService by container.lazyVersionService()
	private val httpServer by container.lazyHttpServer()
	private val translationCsvImport by container.lazyTranslationCsvImport()
	private val vendorCsvImport by container.lazyVendorCsvImport()

	fun run() {
		measureTimeMillis {
			logger.info { "Starting Puff Smith Server [${serverConfig.version}]" }
			versionService.getCollection().toList().asReversed().apply {
				logger.info { if (count() > 0) "Current upgrades:" else "Initial application state" }
			}.forEach {
				logger.info { "\t\tstamp: [${it.stamp.asStamp()}], version: [${it.version}]" }
			}
			if (upgradeManager.upgrade() > 0) {
				logger.info { "Executed upgrades:" }
				versionService.getCollection().forEach {
					logger.info { "\t\tstamp: [${it.stamp.asStamp()}], version: [${it.version}]" }
				}
			}
			logger.info { "Executing translation update" }
			translationCsvImport.import("translations.csv")
			logger.info { "Done" }
			logger.info { "Executing vendor update" }
			vendorCsvImport.import("vendors.csv")
			logger.info { "Done" }
		}.also {
			logger.info { "Boobstrap time ${it}ms" }
		}
		httpServer.start("Puff Smith Server [${serverConfig.version}]")
	}
}

@ExperimentalStdlibApi
@ExperimentalTime
fun main() {
	ServerContainer.create {
		register(Server::class) { Server(this) }
		create(Server::class).run()
	}
}

fun IContainer.lazyServerConfig() = lazy<ServerConfig>()
