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
    return queryInterface.bulkInsert('Quests', [{
      quest: 'Kill All Orc in Rohan!',
      level: 45,
      detail: 'Unite all player and kill all orc who attack Rohan Castle',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      quest: 'The Fellowship of the Ring',
      level: 75,
      detail: 'Protect the hobbit with all cost to the mountain of doom',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      quest: 'A Fallen Man in the Middle of the Dessert',
      level: 15,
      detail: 'Find a hopeless man in the middle of the desert and give him a water',
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
