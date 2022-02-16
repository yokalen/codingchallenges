//P: array of positive nums and a non-negative num
//R: the nth power of the element in the array at index n, if n is outside of the array return -1
//E: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//   array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
//P:
//find num at n index of array
//if not found return -1 or
//calculate num to nth power and return
function index(array, n){
  let num = array[n]
    return num ? Math.pow(num, n) : -1
}