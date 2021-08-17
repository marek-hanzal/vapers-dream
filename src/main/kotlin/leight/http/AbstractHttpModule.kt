package leight.http

import io.ktor.routing.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass

abstract class AbstractHttpModule(container: IContainer) : AbstractService(container), IHttpModule {
	private val httpIndex by container.lazy<IHttpIndex>()

	fun install(routing: Routing, vararg endpoints: KClass<out IEndpoint>) {
		endpoints.forEach {
			logger.debug { "Setup: Installing endpoint [${it.qualifiedName}]" }
			container.create(it).install(routing)
			httpIndex.endpoint(it)
		}
	}

	fun modules(routing: Routing, vararg modules: KClass<out IHttpModule>) {
		modules.forEach {
			logger.debug { "Setup: Installing (sub)module [${it.qualifiedName}]" }
			container.create(it).install(routing)
			httpIndex.module(it)
		}
	}
}
