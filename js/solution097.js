//pig latin

//translate the string into Pig Latin by following the rules below:
//For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed
//For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed
//For words that begin with vowel sounds, simply add "way" to the end of the word

//examples
//'pig' => 'igpay'
//'glove' => 'oveglay'
//'explain' => 'explainway'

//test the first letter of the word to see if it is a consonant or vowel
//if it is a vowel, add 'way' to the end of the word
//if it is a consonant, tests subsequent chars until we find a vowel
//move consonants to the end of the word and affix 'ay'


//imperative - manual approach
function pigLatin(str){
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelIndex = 0;

    if(vowels.includes(str[0])){
        //if first letter is a vowel
        return str + 'way';
    }else{
        for(let char of str){
            //find the first vowel
            if(vowels.includes(char)){
                //store index of first vowel
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        //compose final string
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
    }
}

console.log(pigLatin('pig'), 'igpay')
console.log(pigLatin('glove'), 'oveglay')
console.log(pigLatin('explain'), 'explainway')
