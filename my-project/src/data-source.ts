import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {  Users1654830812974 }  from "./migration/1654830812974-Users"
import {  User1654832800358 }  from "./migration/1654832800358-User"


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
    migrations: [Users1654830812974, User1654832800358],
    subscribers: []
})
