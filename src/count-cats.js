const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let counter = 0;
  matrix = matrix.flat(Infinity);
  for (let i = 0; i < matrix.length; i++) {
      let symbol = "^^";
      if (matrix[i] == symbol) {
          counter++;
      }
  }
  return counter;
};
