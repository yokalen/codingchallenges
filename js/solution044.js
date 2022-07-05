//p
//array of zero-based and non-negative IDs

//r
//smallest unused ID

//e
//[0,1,2,3,5] => 4
//[0,1,2,3,4,5,6,7,8,9,10] => 11

//p
//sort the array in ascending order
//starting at 0 and check if each number is in the array
//return the first numnber that is not in the array

function nextId(ids){
    let x = 0;
    while(ids.includes(x)) x++;
    return x;
}