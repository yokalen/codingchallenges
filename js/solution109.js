//Color Ghost

//Create a class Ghost

//Ghost objects are instantiated without any arguments.

//Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

//ghost = new Ghost();
//ghost.color => "white" or "yellow" or "purple" or "red"


class Ghost{
    constructor(){
        this.color = this.randomColor()
    }
    randomColor(){
        let colors = ['white', 'yellow', 'purple', 'red']
        return colors[Math.floor(Math.random() * 4)]
    }
}

ghost = new Ghost();
console.log(ghost.color)


//const Ghost = () => this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];