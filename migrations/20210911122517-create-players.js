"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("players", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      playerName: {
        type: Sequelize.STRING,
      },
      runs: {
        type: Sequelize.INTEGER,
      },
      wickets: {
        type: Sequelize.INTEGER,
      },
      teamId: {
        type: Sequelize.INTEGER,
        references: {
          model: "teams",
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
    await queryInterface.dropTable("players");
  },
};
