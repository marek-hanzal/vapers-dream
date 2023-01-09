import {env}          from "@/puff-smith/env/server.mjs";
import {PrismaClient} from "@prisma/client";
import "reflect-metadata";
import {
    container,
    instanceCachingFactory
}                     from "tsyringe";

container.register<PrismaClient>(PrismaClient, {
    useFactory: instanceCachingFactory<PrismaClient>(() => {
        console.log("Creating Prisma");
        return new PrismaClient({
            errorFormat: "pretty",
            log:         env.NODE_ENV === "development" ? [
                "query",
                "error",
                "warn"
            ] : ["error"],
        });
    }),
});

export {container} from "tsyringe";
