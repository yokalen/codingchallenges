// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


//string, no funny biz
//new string, every letter changes case, order of words reversed
//"Example Input" => "iNPUT eXAMPLE"
//"HAPPY DAY OF THE DEAD" => "dead the of day happy"
//"Cat" => "cAT"

// function transformStr(str){
//     //split => reverse => join
//     //reverse the casing map
//     return str.split(' ').reverse().join(' ').split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
// }

//one line
const transformStr = str => str.split(' ').reverse().join(' ').split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');

console.log(transformStr("Example Input"), "iNPUT eXAMPLE")
console.log(transformStr("HAPPY DAY OF THE DEAD"), "dead the of day happy")
console.log(transformStr("Cat"), "cAT")