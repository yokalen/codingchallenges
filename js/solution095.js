// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let result = ''
    let str = word.toLowerCase()
    for(let i = 0; i < word.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            result += '('
        }else{
            result += ')'
        }
    }
    return result
}

console.log(duplicateEncode("din"), "(((")
console.log(duplicateEncode("recede"), "()()()")
console.log(duplicateEncode("Success"), ")())())")
console.log(duplicateEncode("(( @"), "))((")