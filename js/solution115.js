// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//string of words
//string of words in reverse order

function revString(str){
    const arr = str.split(' ')
    const newArr = []
    do {
        newArr.push(arr.pop())
    } while (arr.length > 0);
    return newArr;
}

console.log(revString("The greatest victory is that which requires no battle"), "battle no requires which that is victory greatest The")
