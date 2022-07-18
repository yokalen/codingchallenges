//params
//n and m, both natural positive numbers
//return
//the sum of all multipes of n below m
//example
//2, 9 => 20
//3, 13 => 30
//4, 123 => 1860
//4, -6 => 'INVALID'

function sumMul(n,m){
    if(n > 0 && m > 0){
        let result = 0;
        for(let i = n; i < m; i+=n){
            result+=i 
        }
        return result;
    }else{
        return 'INVALID'
    }
}