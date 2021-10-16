"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      players.belongsTo(models.teams);
      players.hasMany(models.matches);
    }
  }
  players.init(
    {
      playerName: DataTypes.STRING,
      runs: DataTypes.INTEGER,
      wickets: DataTypes.INTEGER,
      teamId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "players",
    }
  );
  return players;
};
