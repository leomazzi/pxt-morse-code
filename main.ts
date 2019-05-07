let l_letter: string[] = []
let l_morse: number[][] = []

l_letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "?"]
l_morse = [[1, 2], [2, 1, 1, 1], [2, 1, 2, 1], [2, 1, 1], [1], [1, 1, 2, 1], [2, 2, 1], [1, 1, 1, 1], [1, 1], [1, 2, 2, 2], [2, 1, 2], [1, 2, 1, 1], [2, 2], [2, 1], [2, 2, 2], [1, 2, 2, 1], [2, 2, 1, 2], [2, 2, 1, 2], [1, 2, 1], [1, 1, 1], [2], [1, 1, 2], [1, 1, 1, 2], [2, 1, 1, 2], [2, 1, 2, 2], [2, 2, 1, 1], [1, 2, 2, 2, 2], [1, 1, 2, 2, 2], [1, 1, 1, 2, 2], [1, 1, 1, 1, 2], [1, 1, 1, 1, 1], [2, 1, 1, 1, 1], [2, 2, 1, 1, 1], [2, 2, 2, 1, 1], [2, 2, 2, 2, 1], [2, 2, 2, 2, 2], [1, 2, 1, 2, 1], [2, 2, 1, 1, 2], [1, 1, 2, 2, 1]]



//% color=190 weight=100 icon="\uf2a2" block="Morse Code"
namespace morse {

    //% block
    //% morse_char.shadow="Char"
    export function letterToMorse(morse_char: string): number {
        return 1;
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {

    }
}

basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);
