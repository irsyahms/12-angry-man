const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const index = require('./routes/index');
const player = require('./routes/player');
const quest = require('./routes/quest');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/players', player);
app.use('/quests', quest);


app.listen(process.env.PORT || 3000, function() {
  console.log('Are you looking for me? Go find me on 3000');
})
