let l_letterU: string[] = []
let l_letterL: string[] = []
let l_morse: number[][] = []

l_letterU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "?"]
l_letterL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "?"]

l_morse = [[1, 2], 
[2, 1, 1, 1], 
[2, 1, 2, 1], 
[2, 1, 1], 
[1], 
[1, 1, 2, 1], 
[2, 2, 1], 
[1, 1, 1, 1], 
[1, 1], 
[1, 2, 2, 2], 
[2, 1, 2], 
[1, 2, 1, 1], 
[2, 2], 
[2, 1], 
[2, 2, 2], 
[1, 2, 2, 1], 
[2, 2, 1, 2], 
[1, 2, 1], 
[1, 1, 1], 
[2], 
[1, 1, 2], 
[1, 1, 1, 2], 
[1, 2, 2], 
[2, 1, 1, 2], 
[2, 2, 2, 2], 
[1, 2, 2, 2, 2], 
[1, 1, 2, 2, 2], [1, 1, 1, 2, 2], [1, 1, 1, 1, 2], [1, 1, 1, 1, 1], [2, 1, 1, 1, 1], [2, 2, 1, 1, 1], [2, 2, 2, 1, 1], [2, 2, 2, 2, 1], [2, 2, 2, 2, 2], [1, 2, 1, 2, 1], [2, 2, 1, 1, 2], [1, 1, 2, 2, 1]]



//% color=190 weight=100 icon="\uf2a2" block="Morse Code"
namespace morse {

    export function indexOfChar(char: string): number {
        let _char: string = char.charAt(0);

        for (let i = 0; i < l_letterU.length; i++) {
            if ((l_letterU[i] == _char) || (l_letterL[i] == _char)) {
                return i;
            }
        }

        return -1;
    }

    //% block
    //% char.defl="?"
    export function letterToMorse(char: string): number[] {
        let position: number = indexOfChar(char);
        if (position >= 0)
            return l_morse[position];
        else
            return null;
    }

}

let br: number = morse.indexOfChar("X");
let kod: number[] = morse.letterToMorse("X");
let s: string = "";

for (let i = 0; i < kod.length; i++) {
    if (kod[i] == 1) {
        s = s + ".";
    }
    else {
        s = s + "-";
    }
}

basic.showString(s);
basic.showNumber(br);
