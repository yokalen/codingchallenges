//Params 
//a string of letters, could be sentences, words, or just letters

//Return
//return the string after replacing all vowels with exclamation marks

//Example
//Hi! => H!!
//Hi! Hi! => H!! H!!
//aeiou => !!!!!
//ABCDE => !BCD!

//Psuedo code
//split the string at each vowel and rejoin with ! instead

function replace(s){
    let result = s.split('a').join('!').split('A').join('!').split('e').join('!').split('E').join('!').split('i').join('!').split('I').join('!').split('o').join('!').split('O').join('!').split('u').join('!').split('U').join('!')

    return result;
    
  }