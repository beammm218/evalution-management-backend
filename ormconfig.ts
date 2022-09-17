export default {
    type: "mariadb",
    port: 3306,
    host: "localhost",
    username: "user",
    password: "password",
    database: "database",
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
    cli: {
        migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
};
