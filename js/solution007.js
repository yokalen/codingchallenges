/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

//Parameters: animal, dish, strings, lowercase
//Return: true or false
//Examples: great blue heron, garlic naan => true
//          chickadee, chocolate cake => true
//          brown bear, bear claw => false
//          racoon, mac n cheese => false
//Psuedo Code:
//get the first and last letter of the name
//get the first and last letter of the dish
//return true if they match or false if they don't

function feast(beast, dish) {
    let beastLetters = beast.split('').shift() + beast.split('').pop()
    let dishLetters = dish.split('').shift() + dish.split('').pop()
    return beastLetters === dishLetters
}

//test 
console.log('true', feast("great blue heron", "garlic naan") )
console.log('true', feast("chickadee", "chocolate cake"))
console.log('false', feast("brown bear", "bear claw"))