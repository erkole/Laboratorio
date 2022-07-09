// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Laboratorio_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Clienti
      * ------------------------------------
      */
    class Clienti extends Sequelize.Model{}
    Clienti.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Cognome: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Email: {
        type: Sequelize.STRING
      },
      
      Nome: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Telefono: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      CliKey: {
        type: Sequelize.INTEGER,
        references: {
          model: InterventiT,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "clienti", timestamps: false }
    );



    /**
      * ------------------------------------
      * InterventiR
      * ------------------------------------
      */
    class InterventiR extends Sequelize.Model{}
    InterventiR.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Costo: {
        type: Sequelize.DECIMAL
      },
      
      Descrizione: {
        type: Sequelize.STRING
      },
      
      Prezzo: {
        type: Sequelize.DECIMAL
      },
      
      Qnt: {
        type: Sequelize.DECIMAL
      },
      
      Totale: {
        type: Sequelize.DECIMAL
      },
      
      Um: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      ArtKey:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Materiali",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "interventir", timestamps: false }
    );



    /**
      * ------------------------------------
      * InterventiT
      * ------------------------------------
      */
    class InterventiT extends Sequelize.Model{}
    InterventiT.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Cliente: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Data: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      Difetto: {
        type: Sequelize.STRING
      },
      
      Numero: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      Stato: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Tecnico: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      CliKey:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Clienti",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "interventit", timestamps: false }
    );



    /**
      * ------------------------------------
      * Materiali
      * ------------------------------------
      */
    class Materiali extends Sequelize.Model{}
    Materiali.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Descrizione: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Prezzo: {
        type: Sequelize.DECIMAL
      },
      
      Um: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      ArtKey: {
        type: Sequelize.INTEGER,
        references: {
          model: InterventiR,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "materiali", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
