//Who likes it?

//takes in an array of names or an empty array containing the first name as a string of everyone who likes it

//returns a string that says "no one likes this" if the array is empty, "Soandso likes this" if one name is in the array, "Soandso and Whosit like this" if two names are in the array, "Soandso, Whosit, and Thisguy like this" if three names are in the array, "Soandso, Whosit, and 2 others like this" if four are in the array, and for 4 or more names the number in "and 2 others" simply increases

// [] -->  "no one likes this"
// ["Peter"] -->  "Peter likes this"
// ["Jacob", "Alex"] -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"] -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function whoLikesIt(arr){
    //conditionals
    if(!arr || arr.length === 0){
        return 'no one likes this'
    }if(arr.length === 1){
        return arr[0].concat(' likes this')
    }if(arr.length === 2){
        return arr[0].concat(' and ', arr[1], ' like this')
    }if(arr.length === 3){
        return arr[0].concat(', ', arr[1], ' and ', arr[2], ' like this')
    }if(arr.length > 3){
        let num = arr.length - 1
        return arr[0].concat(', ', arr[1], ' and ', num, ' others like this')
    }
}