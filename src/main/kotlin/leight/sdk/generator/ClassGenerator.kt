package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.utils.ClassContext
import kotlin.reflect.full.memberProperties

class ClassGenerator(container: IContainer) : AbstractService(container) {
	private val propertyGenerator by container.lazyPropertyGenerator()

	fun generate(classContext: ClassContext) = """
export interface ${classContext.typeClass.klass.simpleName!!} {
${classContext.typeClass.klass.memberProperties.mapNotNull { propertyGenerator.generate(it) }.joinToString("\n")}
}"""
}

fun IContainer.lazyClassGenerator() = lazy<ClassGenerator>()
