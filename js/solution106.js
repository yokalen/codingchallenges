/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//array
//array with only truthy values
//[1, 'toast', 0, '', 'apples'] => [1, 'toast', 'apples']
//[0, 1, 2] => [1, 2]
//[true, false, 0, 4] => [true, 4]

function falsyBouncer(array) {
    // filter element is truthy
    return array.filter(el => el)
}

console.log(falsyBouncer([1, 'toast', 0, '', 'apples']), [1, 'toast', 'apples'])
console.log(falsyBouncer([0, 1, 2]), [1, 2])
console.log(falsyBouncer([true, false, 0, 4]), [true, 4])