const vowels = ["a", "e", "i", "o", "u"];
const dict = {"a": "a", "e":"e", "i":"i", "o":"o", "u":"u"}

var removeVowels = function(s) {
    // list of vowels
    // iterate through given string
    // check if character is in the list of vowels
        // if so splice the list and delete that chracter

    const sArr = s.split("");
    const newS = [];

    for(let i = 0; i < sArr.length ; i++) {
        if(!vowel.includes(sArr[i])) {
            newS.push(sArr[i]);
        };
    }
    return newS.join("");
}
// one-liners
// var RemoveVowels = function(s) {
//     return s.split("").filter(letter => !vowels.includes(letter)).join("");
// }

// var RemoveVowels = function(s) {
//     return s.split("").filter(letter => !dict[letter]).join("");
// }
