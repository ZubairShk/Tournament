"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("matches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      place: {
        type: Sequelize.STRING,
      },
      winner: {
        type: Sequelize.INTEGER,
        references: {
          model: "teams",
          key: "id",
        },
      },
      looser: {
        type: Sequelize.INTEGER,
        references: {
          model: "teams",
          key: "id",
        },
      },
      manOfTheMatch: {
        type: Sequelize.INTEGER,
        references: {
          model: "players",
          key: "id",
        },
      },
      bowlerOfTheMatch: {
        type: Sequelize.INTEGER,
        references: {
          model: "players",
          key: "id",
        },
      },
      bestFielder: {
        type: Sequelize.INTEGER,
        references: {
          model: "players",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("matches");
  },
};
