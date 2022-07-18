//params 
//x, n two whole numbers greater than 0

//return 
//an array of the first (n) multiples of (x)

//examples
//1, 10 => [1,2,3,4,5,6,7,8,9,10]
//2, 5 => [2,4,6,8,10]
//3, 4 => [3,6,9,12]
//10, 1 => [10]

//psuedo code
//create an array
//starting at 1 and counting up by 1, multiply that number by x and push to the array
//return the array after the loop has reached n

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(x*i);
    }
    return z;
}