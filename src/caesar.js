// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
  // your solution code here
  let message = input.toLowerCase()
  let output = "";
  if (shift === 0 || shift === null || shift < -25 || shift > 25) {
    return false;
  }

  if (!encode) {
    shift *= -1;
  }

  for (let i = 0; i < message.length; i++) {
    let l = message[i];
    if (l.match(/[a-z]/i)) {
      let code = message.charCodeAt(i);
      if (code >= 97 && code <= 122) {
        l = String.fromCharCode(((26 + code - 97 + shift) % 26) + 97);
      }
    }
    output += l;
  }
  return output
}

    return {
      caesar,
    };
  })();
module.exports = { caesar: caesarModule.caesar };
