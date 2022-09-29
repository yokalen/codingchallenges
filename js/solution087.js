/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    if(stringA.length === stringB.length){
        let hammingDistance = 0
        for(let i = 0; i < stringA.length; i++){
            if(stringA[i] != stringB[i]){
                hammingDistance++
            }
        }
        return hammingDistance
    }
}