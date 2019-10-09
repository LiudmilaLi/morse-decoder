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

    let letter = {'**********' : ' '}; 
    let textCode = [];
    
                  
        for (let sign in MORSE_TABLE) {
            let decodeSymbol = '';
         for (let i = 0; i < sign.length; i++) {
                if (sign[i] === '.') {
                    decodeSymbol += '10';
                } else decodeSymbol += '11';
                } 
                             
             if (decodeSymbol.length < 10) {
              letter['0'.repeat(10 - decodeSymbol.length) + decodeSymbol] = MORSE_TABLE[sign];
            } else {
              letter[decodeSymbol] = MORSE_TABLE[sign];
            }
         }
          
          for (let i = 0; i < expr.length; i += 10) {
               textCode.push(expr.slice(i, i + 10)); 
               continue;
              } 
              

        let exprSym = '';
        const solution = textCode.reduce((accumulator, dua) => accumulator + letter[dua], exprSym);
             
            return solution;             
         }

        module.exports = {
            decode
        }