//PREP

//Parameters: two parameters, first is employed, true whenever you are employed and second is vacation, true whenever you are on vacation
//Return: True if you are employed and not on vacation, otherwise false
//Example: true, false => false
//          false, true => false
//          false, false => false
//          true, false => true
//first solution
function setAlarm(employed, vacation){
    if(employed && !vacation){
        return true
    }else{
        return false
    }
}