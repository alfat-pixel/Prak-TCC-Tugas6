import { Sequelize } from "sequelize";

const db = new Sequelize ("notes02","root","",{
    host: "34.45.72.91",
    dialect : "mysql",
});

export default db
