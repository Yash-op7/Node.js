const {generateRandom, isPrime} = require('./utils');

let x = generateRandom();
console.log(`random number between 1 and 100: ${x} and its ${isPrime(x) ? "a": "not a"} prime number.`);
