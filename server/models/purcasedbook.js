"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class purcasedBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      purcasedBook.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "idUser",
        },
      });
      purcasedBook.belongsTo(models.book, {
        as: "book",
        foreignKey: {
          name: "idBook",
        },
      });
    }
  }
  purcasedBook.init(
    {
      idUser: DataTypes.INTEGER,
      idBook: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "purcasedBook",
    }
  );
  return purcasedBook;
};
