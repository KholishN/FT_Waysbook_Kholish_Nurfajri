"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recommendBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recommendBook.belongsTo(models.book, {
        as: "book",
        foreignKey: {
          name: "idBook",
        },
      });
    }
  }
  recommendBook.init(
    {
      idBook: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recommendBook",
    }
  );
  return recommendBook;
};
