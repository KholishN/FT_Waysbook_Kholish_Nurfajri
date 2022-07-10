const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("waysbook", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

db.sequelize = sequelize;

module.exports = db;
