//string of characters

//a new string where each character in the argument string is replaced: if the character is repeated in the string use ')' and if it is the only instance of that character use '('
//capital letters count as the same character as their lowercase counterpart

//'don' => '((('
//'recede' => '()()()'
//'Success' => ')())())'

function duplicateEncoder(string){
    let str = string.toLowerCase()
    let result = ''
    for(let i = 0; i < string.length; i++){
        if(str.indexOf(i) != str.lastIndexOf(i)){
            result += ')'
        }else{
            result += '('
        }
    }
    return result
}