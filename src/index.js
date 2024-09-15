const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';
  let morse = '';
  for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.slice(i, i + 10);
    if (letter === '**********') {
      result += ' ';
    } else {
      for (let j = 0; j < letter.length; j += 2) {
        if (letter.slice(j, j + 2) === '10') {
          morse += '.';
        } else if (letter.slice(j, j + 2) === '11') {
          morse += '-';
        }
      }
      result += MORSE_TABLE[morse];
      morse = '';
    }
  }
  return result;
}

module.exports = {
  decode,
};
