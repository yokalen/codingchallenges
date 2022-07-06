//create a class ghost
//ghost objects are instantiated without any arguments and are given a random color attribute of "white" "yellow" "purple" or "red"
function Ghost(){
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)]
}