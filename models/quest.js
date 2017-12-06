'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quest = sequelize.define('Quest', {
    quest: DataTypes.STRING,
    level: DataTypes.STRING,
    detail: DataTypes.TEXT
  });

  //class methods
  Quest.associate = function(models) {
    Quest.belongsToMany(models.Player, {through: 'PlayerQuest'});
  }
  return Quest;
};
