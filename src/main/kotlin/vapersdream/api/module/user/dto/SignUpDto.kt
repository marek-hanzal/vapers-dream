package vapersdream.api.module.user.dto

import leight.client.sdk.property.SdkLiteralProperty

data class SignUpDto(
	@SdkLiteralProperty("string")
	val login: String,
	@SdkLiteralProperty("string")
	val password: String,
)
