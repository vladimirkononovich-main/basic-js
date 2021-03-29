const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if(typeof(sampleActivity) !== "string") {
    return false;
  }

  let sam = parseFloat(sampleActivity);
  let d = 0.693/HALF_LIFE_PERIOD;
  let ans = Math.ceil(Math.log(MODERN_ACTIVITY/sam)/d);
  
  if(!sam || sam<0) {
    return false;
  }
  
  return ans<0?false:ans;
};
