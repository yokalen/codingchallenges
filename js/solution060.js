//params
//a string of words

//return
//a new string with all vowels removed

//example
//"This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

//psuedo code
//split the string at each vowel and then recombine 

function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(el => !vowels.includes(el)).join('');
}