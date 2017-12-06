'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Players', [{
      name: 'Aragorn',
      job: 'Knight',
      level: 89,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Nazgul',
      job: 'Mage',
      level: 76,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Elrond',
      job: 'Priest',
      level: 45,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gimli',
      job: 'Archer',
      level: 44,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
