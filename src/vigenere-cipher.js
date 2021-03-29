const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(c) {
    if (c === false) this.reverse = false;
  }

  reverse = true;

  encrypt(inp, key) {

    if ((inp, key === undefined))


      throw new Error('One or more parameters has not been given');

    
      const messageUpper = inp.toUpperCase(),

      
      keyUpper = key.toUpperCase();

    
      let result = "";

    
      for (let i = 0, j = 0; i <= messageUpper.length - 1; i++) {

      if (
        messageUpper[i].charCodeAt() < 65 || messageUpper[i].charCodeAt() > 90
      ) {
        result = result + messageUpper[i];
        continue;
      }

      result = result + String.fromCharCode(

        ((messageUpper[i].charCodeAt() + keyUpper[j].charCodeAt() - 130) % 26) +
          65
      );

      j++;
      j % keyUpper.length === 0 ? (j = 0) : j;
    }

    return this.reverse === true ? result : result.split('').reverse().join('');
  }
  decrypt(inp, key) {

    if ((inp, key === undefined))


    throw new Error('One or more parameters has not been given');
    
    let result = "";

    const keyUpper = key.toUpperCase();

    for (let i = 0, j = 0; i <= inp.length - 1; i++) {

      if (inp[i].charCodeAt() < 65 || inp[i].charCodeAt() > 90) {

        result = result + inp[i];
        continue;
      }
      result = result + String.fromCharCode(

        ((inp[i].charCodeAt() - keyUpper[j].charCodeAt() + 26) % 26) + 65
      );

      j++;
      j % keyUpper.length === 0 ? (j = 0) : j;

    }
    return this.reverse === true ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
