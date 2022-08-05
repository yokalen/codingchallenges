//params 
//an array of arrays that contain strings of letters
function arrAdder(arr) {
    let a = ''
    let b = ''
    let c = ''
    let d = ''
    for(let i = 0; i < arr.length; i++){
        a += arr[i][0]
        b += arr[i][1]
        c += arr[i][2]
        d += arr[i][3] 
    }
}