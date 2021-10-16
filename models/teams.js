"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      teams.hasMany(models.players);
      teams.hasMany(models.matches);
    }
  }
  teams.init(
    {
      teamName: DataTypes.STRING,
      iccWins: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "teams",
    }
  );
  return teams;
};
