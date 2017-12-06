const express = require('express');
const router = express.Router();

const Model = require('../models');

router.get('/', function(req,res) {
  Model.Quest
   .findAll({
     include: {
       model: Model.Player
     },
     order: [['level', 'ASC']]
   })
   .then(quests => {
    //  res.send(quests);
     res.render('quest', {quests: quests})
   })
   .catch(err => {
     console.log(err);
   })
})

router.get('/:id/invite', function(req,res){
  Model.Quest
   .findById(req.params.id)
   .then(quest => {
     Model.Player
      .findAll()
      .then(players => {
        res.render('invite-player', {quest: quest, players: players, err: null})
      })
   })
})

function check(questLevel, playerId) {
  return new Promise((resolve, reject) =>{
    Model.Player
     .findById(playerId)
     .then(player => {
       if(player.level < questLevel) {
         console.log('masuk resolve');
         resolve(true)
       } else {
         resolve(false)
       }
     })
     .catch(err => {
       reject(err)
     })
  })
}

router.post('/:id/invite', function(req,res){

   check(req.body.level, req.body.playerId)
    .then(isSufficient => {
      if (!isSufficient) {
       Model.PlayerQuest
        .create({
          PlayerId: req.body.playerId,
          QuestId: req.params.id,
          position: req.body.position
        })
        .then(playerQuest => {
          res.redirect('/quests');
        })
        .catch(err => {
          Model.Quest
           .findById(req.params.id)
           .then(quest => {
             Model.Player
              .findAll()
              .then(players => {
                res.render('invite-player', {quest: quest, players: players, err: err.errors[0].message})
              })
           })
        })
     } else {
       Model.Quest
        .findById(req.params.id)
        .then(quest => {
          Model.Player
           .findAll()
           .then(players => {
             res.render('invite-player', {quest: quest, players: players, err: 'player level is not sufficient to this quest'})
           })
        })
     }
    })

})

module.exports = router
