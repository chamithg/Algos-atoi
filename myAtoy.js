/**
 * @param {string} s
 * @return {number}
 */

function myAtoi(s) {
  let output = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && output.length > 0) {
      break;
    }
    if (s[i] !== " ") {
      if ((s[i] == "-" || s[i] == "+") && output.length == 0) {
        output += s[i];
      } else {
        const charCode = s.charCodeAt(i) - 48;
        if (charCode >= 0 && charCode <= 9) {
          output += s[i];
        } else {
          break;
        }
      }
    }
  }
  if (parseInt(output) < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  if (parseInt(output) > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (isNaN(output)) {
    return 0;
  } else {
    return parseInt(output);
  }
}

s = "-5-";

console.log(myAtoi(s));
