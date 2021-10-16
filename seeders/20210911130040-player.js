"use strict";

const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var dummyJSON = [];
    for (var i = 0; i < 200; i++) {
      dummyJSON.push({
        playerName: faker.name.lastName(),
        runs: faker.datatype.number({
          min: 2,
          max: 1000,
        }),
        wickets: faker.datatype.number({
          min: 2,
          max: 200,
        }),
        teamId: faker.datatype.number({
          min: 1,
          max: 10,
        }),
      });
    }
    return queryInterface.bulkInsert("players", dummyJSON, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("players", null, {});
  },
};
