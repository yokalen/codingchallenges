//p
//name, city, state
//name will be an array consisting of one or more values and the length of the array will vary

//r
//a string that says 'Hello [full name]! Welcome to [city], [state]'

//e
//(['John', 'Smith'], 'Phoenix', 'Arizona') => Hello, John Smith! Welcome to Phoenix, Arizona!

//p
//join the name array with spaces
//return the string

function sayHello(name, city, state){
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
