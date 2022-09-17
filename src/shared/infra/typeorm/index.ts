import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    return createConnection({
        type: "mariadb",
        port: 3306,
        host: "localhost",
        username: "user",
        password: "password",
        database: "database",
        migrations: ["./dist/shared/infra/typeorm/migrations/*.js"],
        entities: ["./dist/modules/**/entities/*.js"],
        cli: {
            migrationsDir: "./dist/shared/infra/typeorm/migrations",
        },
    });
};
