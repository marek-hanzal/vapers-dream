package ps.api.module.session

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.module.session.endpoint.TicketEndpoint

class SessionHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			TicketEndpoint::class,
		)
	}
}
