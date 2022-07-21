//param
//s is a string of words

//return
//true if string includes "tree fiddy", "three fifty", or "3.50"

function isLockNessMonster(s) {
    return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
}