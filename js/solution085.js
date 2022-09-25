/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

//first try
// function palindromeChecker(text) {
//     let forwards = text.toLowerCase();
//     let backwards = forwards.split('').reverse().join('');
//     return forwards === backwards;
// }

//optimized
function palindromeChecker(text) {
    let textLen = text.length;
    for(let i = 0; i < textLen; i++){
        if(text[i] !== text[textLen - 1 - i]){
            return false;
        }
    }
    return true;
}