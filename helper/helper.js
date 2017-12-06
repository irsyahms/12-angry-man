function getDescLevel(level) {
  if(level <= 15) {
    return 'Novice';
  } else if(level < 76) {
    return 'Champion';
  } else if(level >= 76) {
    return 'Elite'
  }
}

function generateLevel() {
  return Math.floor(Math.random()*101)
}


module.exports = {getDescLevel, generateLevel}
