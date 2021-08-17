package vapersdream.api.public.user.endpoint

import io.ktor.application.*
import io.ktor.auth.*
import leight.container.IContainer
import leight.rest.*
import leight.session.SessionTicket

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class TicketEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> {
		val principal = call.principal<SessionTicket>()
		return if (principal !== null) ok() else unauthorized("No ticket.")
	}
}
