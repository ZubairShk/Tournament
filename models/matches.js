'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  matches.init({
    place: DataTypes.STRING,
    winner: DataTypes.INTEGER,
    looser: DataTypes.INTEGER,
    manOfTheMatch: DataTypes.INTEGER,
    bowlerOfTheMatch: DataTypes.INTEGER,
    bestFielder: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'matches',
  });
  return matches;
};