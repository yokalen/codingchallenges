String.prototype.toJadenCase = function (param) {
    return this.split(' ').map(el => el.replace(el[0], el[0].toUpperCase())).join(' ')
  };

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase);
  
