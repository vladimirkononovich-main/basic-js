const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
  let depthArr = 1 + 0;
    arr.forEach((item) => {

      if (Array.isArray(item)) {

        this.depthArr = 1 + this.calculateDepth(item);

        if (this.depthArr > depthArr) {

          depthArr = this.depthArr;
        }
      }
      
      
    });
     
    return depthArr;
  }
};