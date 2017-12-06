'use strict';
module.exports = (sequelize, DataTypes) => {
  var PlayerQuest = sequelize.define('PlayerQuest', {
    PlayerId: DataTypes.INTEGER,
    QuestId: DataTypes.INTEGER,
    position: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Position cannot be empty'
        }
      }
    }
  });
  return PlayerQuest;
};
