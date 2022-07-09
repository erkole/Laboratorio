// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_Laboratorio_db";
import UserModel from "../models/Laboratorio_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.Laboratorio_db.host +
        ":" +
        properties.Laboratorio_db.port +
        "//" +
        properties.Laboratorio_db.user +
        "@" +
        properties.Laboratorio_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.Laboratorio_db.name,
      properties.Laboratorio_db.user,
      properties.Laboratorio_db.password,
      {
        host: properties.Laboratorio_db.host,
        dialect: properties.Laboratorio_db.dialect,
        port: properties.Laboratorio_db.port,
        logging: false
      }
    );
    this.dbConnection_Laboratorio_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Laboratorio_db;
  }
}

export default new Database();
