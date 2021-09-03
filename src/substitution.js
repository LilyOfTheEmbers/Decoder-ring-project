// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

   function substitution(input, alphabet, encode = true) {
    // your solution code here
    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false;
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
    const sets1 = alphabet.split("");
    const sets2 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    function _translate(libA, libB) {
      let result = "";
      let message = input.toLowerCase();
      for (let text = 0; text < message.length; text++) {
        let letter = message[text];
        if (letter.match(/[^ ]/)) {
          let num = libA.indexOf(letter);
          result += libB[num];
        } else {
          result += letter; 
        }
      }
      return result;
    }
    if (encode) {
      let final = _translate(sets2, sets1);
      return final;
    } else {
      let final = _translate(sets1, sets2);
      return final;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
