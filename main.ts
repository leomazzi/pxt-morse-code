let l_letterU: string[] = []
let l_letterL: string[] = []
let l_morse: number[][] = []

l_letterU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "?"]
l_letterL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "?"]

l_morse = [
    [1, 2],         // A
    [2, 1, 1, 1],   // B
    [2, 1, 2, 1],   // C
    [2, 1, 1],      // D
    [1],            // E
    [1, 1, 2, 1],   // F
    [2, 2, 1],      // G
    [1, 1, 1, 1],   // H
    [1, 1],         // I
    [1, 2, 2, 2],   // J
    [2, 1, 2],      // K
    [1, 2, 1, 1],   // L
    [2, 2],         // M
    [2, 1],         // N
    [2, 2, 2],      // O
    [1, 2, 2, 1],   // P
    [2, 2, 1, 2],   // Q
    [1, 2, 1],      // R
    [1, 1, 1],      // S
    [3],            // T
    [1, 1, 3],      // U
    [1, 1, 1, 3],   // V
    [1, 3, 3],      // W
    [3, 1, 1, 3],   // X
    [3, 1, 3, 3],   // Y
    [3, 3, 1, 1],   // Z
    [1, 3, 3, 3, 3], // 1
    [1, 1, 3, 3, 3], // 2
    [1, 1, 1, 3, 3], // 3
    [1, 1, 1, 1, 3], // 4
    [1, 1, 1, 1, 1], // 5
    [3, 1, 1, 1, 1], // 6
    [3, 3, 1, 1, 1], // 7
    [3, 3, 3, 1, 1], // 8
    [3, 3, 3, 3, 1], // 9
    [3, 3, 3, 3, 3], // 0
    [1, 3, 1, 2, 1], // "."
    [3, 3, 1, 1, 2], // ","
    [1, 1, 3, 3, 1]] // "?"

// the length of a dot is one unit
// a dash is three units
// the space between parts of the same letter is one unit
// the space between letters is three units
// the space between words is seven units


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

let br: number = morse.indexOfChar("0");
let kod: number[] = morse.letterToMorse("0");
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
