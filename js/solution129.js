//array of non-negative numbers and strings
//return new arr without any of the strings
//[1, 2, 'a', 'b'] => [1, 2]
//[1, 'a', 'b', 0, 15] => [1, 0, 15]
//[1, 2, 'ssaavvaaa', '1', '124', 123] => [1, 2, 123]

function filterList(arr){
    let filtered = arr.filter(x => typeof x === "number")
    return filtered;
}