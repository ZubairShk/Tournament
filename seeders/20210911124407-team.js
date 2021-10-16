"use strict";
const faker = require("faker");

const teams = [...Array(10)].map((team) => ({
  teamName: faker.address.country(),
  iccWins: faker.datatype.number({
    min: 0,
    max: 10,
  }),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("teams", teams, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("teams", null, {});
  },
};
