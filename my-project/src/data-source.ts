import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "caro2803",
    database: "proyecto_integrador",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["src/migration/*.ts"],
    subscribers: []
})
