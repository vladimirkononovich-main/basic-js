const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, value ) {
  str = str + ""
  value.addition = value.addition === undefined ? "" : value.addition = value.addition + ""

  value.additionRepeatTimes = value.additionRepeatTimes === undefined ? 1 : Number(value.additionRepeatTimes)

  value.repeatTimes = value.repeatTimes === undefined ? 1 : Number(value.repeatTimes)

  let g = [],fullArr = []

  for (let i = 0; i < value.repeatTimes; i++) {
    fullArr.push(str)
  }
  for (let i = 0; i < value.additionRepeatTimes; i++) {
    g.push(value.addition)
  }
  return fullArr.map((i) => i+g.join(value.additionSeparator || '|')).join(value.separator || '+')
};
  