const express = require('express');
const router = express.Router();
const Model = require('../models');

router.get('/', function(req,res) {
  Model.Player
   .findAll({
     order: [['name', 'ASC']]
   })
   .then(players => {
     res.render('player', {players: players, err: null})
   })
   .catch(err => {
     console.log(err);
   })
})

router.post('/', function(req,res){
  Model.Player
   .create(req.body)
   .then(player => {
     res.redirect('/players')
   })
   .catch(err => {
     Model.Player
      .findAll()
      .then(players => {
        res.render('player', {players: players, err: err.errors[0].message})
      })
      .catch(err => {
        console.log(err);
      })
   })
})

router.get('/edit/:id', function(req,res) {
  Model.Player
   .findById(req.params.id)
   .then(player => {
     res.render('edit-player', {player: player, err: null});
   })
})

router.post('/edit/:id', function(req,res) {
  Model.Player
   .update({
     name: req.body.name,
     job: req.body.job,
     id: req.params.id
   }, {
     where: {
       id: req.params.id
     }
   })
   .then(player => {
     res.redirect('/players');
   })
   .catch(err => {
     Model.Player
      .findById(req.params.id)
      .then(player => {
        res.render('edit-player', {player: player, err: err.errors[0].message});
      })
   })
})

router.get('/delete/:id', function(req,res) {
  Model.Player
   .destroy({
     where: {id: req.params.id}
   })
   .then(player => {
     res.redirect('/players');
   })
})

module.exports = router
