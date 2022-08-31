//param - an array
//return an array with every second element removed from the original array
//example - ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//code - filter the array to remove every second item

function removeEveryOther(arr){
    return arr.filter(function(el,i){
        return i%2 === 0;
    })
}