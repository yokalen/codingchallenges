//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//Note: For 4 or more names, the number in "and 2 others" simply increases.

//array of names, possibly empty
//string of display text

function displayText(arr){
    if(arr.length > 3){
        return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
    }else if(arr.length === 3){
        return `${arr[0]}, ${arr[1]} and Mark like this`
    }
}


console.log(displayText([]), "no one likes this")
console.log(displayText(["Peter"]), "Peter likes this")
console.log(displayText(["Jacob", "Alex"]), "Jacob and Alex like this")
console.log(displayText(["Max", "John", "Mark"]), "Max, John and Mark like this")
console.log(displayText(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this")
