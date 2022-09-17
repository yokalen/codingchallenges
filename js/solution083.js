//array of 10 integers from 0-9

//a string of the numbers in the same order formatted as a phone number would normally be

//[1,2,3,4,5,6,7,8,9,0] => '(123) 456 - 7890'
//[4,1,5,2,2,2,2,2,2,2] => '(415) 222 - 2222'
//[9,2,5,3,1,8,4,7,6,0] => '(925) 318 - 4760'

function phoneNum(arr){
    return '(' + arr[0] + arr[1] + arr[2] + ') ' + arr[3] + arr[4] + arr[5] + ' - ' + arr[6] + arr[7] + arr[8] + arr[9]
}

console.log(phoneNum([4,1,5,2,2,2,2,2,2,2]))