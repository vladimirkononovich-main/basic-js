const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {
  return arr.reduce((res, b, i) => {
    switch(b) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
        return res;
    }

    if (arr[i - 1] === "--discard-next") {
      return res;
    }

    if (arr[i - 1] === "--double-next") {

      res.push(b, b)

    } else {

      res.push(b);
    }

    switch(arr[i + 1]) {

      case "--double-prev":

        res.push(b);

        break;

      case "--discard-prev":

        res.splice(res.length-1,1);
        
        break;
    }

    return res;
  }, []);
};
