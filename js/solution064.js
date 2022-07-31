String.prototype.toJadenCase = function (param) {
    //...
    let words = param.split(' ')
    words = words.forEach(el => {
        return el[0].toUppercase
    });
    return words.join(' ')
  };

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase);
  
