const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let decodeWord = [];
  let finaleDecoder = [];
  for (let i = 1; i <= expr.split("").length / 10; i++) {
    let word = expr.split("").slice(`${i - 1}0`, `${i}0`);
    let morse = [];
    for (let m = 0; m < word.length; m += 2) {
      if (word[m] + word[m + 1] === "10") {
        morse.push(".");
      } else if (word[m] + word[m + 1] === "11") {
        morse.push("-");
      }
    }
    decodeWord.push(morse);
  }
  decodeWord.forEach((elements) => {
    let valueElement = elements.join("");
    // console.log(MORSE_TABLE[valueElement]);
    if (MORSE_TABLE.hasOwnProperty(valueElement) == false) {
      finaleDecoder.push(" ");
    } else {
      finaleDecoder.push(MORSE_TABLE[valueElement]);
    }
  });

  return finaleDecoder.join("");
}


module.exports = {
    decode
}
