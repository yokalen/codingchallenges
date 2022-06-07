//P: animal encountered by the frog
//R: small if the animal is an alligator otherwise wide
//E: bear => wide
//   fish => wide
//   alligator => small
//   cat => wide
//P: if animal is alligator return small else return wide

//first try
function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}