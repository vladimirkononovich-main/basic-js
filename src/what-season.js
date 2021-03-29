const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {

  if(!date) return 'Unable to determine the time of year!'

    try{

        date.toJSON()
    }

    catch(err){

        throw new Error(err)
    }
    const s = date.getMonth()
    let stringSeason = (s >=5 && s <=7) ? 'summer' :
      
      (s >= 2 && s <= 4) ? 'spring' :
        (s >= 8 && s <= 10) ? 'autumn': 'winter';
    return stringSeason
};
