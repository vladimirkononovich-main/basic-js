const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  tps = turnsSpeed / 3600

  turns = Math.pow(2, disksNumber) - 1

  seconds = Math.floor(turns / tps)

  return { 
    seconds: seconds,
    turns: turns 
    
  }
};
