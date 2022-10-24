//param - string
//return new string with lowercase vowels removed, everything else stays the same
//hello => hll
//goodbye => gdby
//HELLO => HELLO

function shortcut(string){
    return string.replaceAll('a', '')
    .replaceAll('e', '')
    .replaceAll('i', '')
    .replaceAll('o', '')
    .replaceAll('u', '')
}

console.log(shortcut('hello'), 'hll')
console.log(shortcut('goodbye'), 'gdby')
console.log(shortcut('HELLO'), 'HELLO')