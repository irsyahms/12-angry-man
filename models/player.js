'use strict';
const helper = require('../helper/helper');
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^[a-z]+$",'i'],
          msg: "For Player Name, please enter only unaccented alphabetical letters, A–Z or a–z"
        },
        isUnique: function(value, next) {
          Player.findAll(
                   {
                     where: {
                       name: value,
                       id: {[sequelize.Op.ne]: this.id}
                     }
                   }
                 )
          .then(players => {
            console.log('players');
            if(players.length > 0) {
              return next('Player Name already used');
            } else {
              next()
            }
          })
          .catch(err => {
            return next(err)
          })
        }
      }
    },
    job: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
  hooks: {
    beforeCreate: (player) => {
      player.level = helper.generateLevel();
    }
  }
});

  //class methods
  Player.associate = function(models) {
    Player.belongsToMany(models.Quest, {through: 'PlayerQuest'});
  }

  // Instance Method
  Player.prototype.levelDesc = function () {
    return `${this.level} (${helper.getDescLevel(this.level)})`
  }

  return Player;
};
