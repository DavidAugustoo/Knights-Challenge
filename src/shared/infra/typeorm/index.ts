import { DataSource } from "typeorm";

import 'dotenv/config'

export const dataSource = new DataSource({
    type: "mongodb",
    host: process.env.MONGO_HOST,
    port: 27017,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    database: "knights_challenge",
    useUnifiedTopology: true,
    useNewUrlParser: true,
    synchronize: true,
    ssl: true,
    authSource: "admin",
    entities: ["./src/modules/**/entities/*.ts"],
});

dataSource
    .initialize()
    .then(async () => {
        console.log("Initializing the database...");
    })
    .catch((err) => console.log(err));
