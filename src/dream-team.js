const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( value ) {
  let a = [];
  if(!Array.isArray(value)) {

    return false;

  }
  for(let b of value) {

    if(typeof b === "string") {

      for(let g = 0; g < b.length; g++) {

        if(b[g] != " ") {

          a.push(b[g].toUpperCase());
          break;
        }
      }
    }
  }
  return a.sort().join("");
};
