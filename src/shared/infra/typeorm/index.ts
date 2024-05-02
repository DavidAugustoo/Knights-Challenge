import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: null,
    password: null,
    database: "knights_challenge",
    useUnifiedTopology: true,
    useNewUrlParser: true,
    synchronize: true,
    entities: ["./src/modules/**/entities/*.ts"],
});

dataSource
    .initialize()
    .then(async () => {
        console.log("Initializing the database...");
    })
    .catch((err) => console.log(err));
