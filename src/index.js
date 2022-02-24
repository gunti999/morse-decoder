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

    let strFin = '';

    while (true) {

        let str = '';
        
        for (let i = 0; i < 5; i++) {
            if (expr.substring(0, 2) == '**') {
                expr = expr.substring(10);
                strFin += ' ';
            } 

            if (expr.substring(0, 2) == '10') {
                str += '.';
            }

            else if (expr.substring(0, 2) == '11') {
                str += '-';
            }
                
            expr = expr.substring(2);
        }

        if (str) {
            strFin += MORSE_TABLE[str];
        }

        if (expr.length == 0) {
            break;
        }
    }
    return strFin;
}

module.exports = {
    decode
}