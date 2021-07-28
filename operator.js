// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); //divide
console.log(1 * 1); // multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); // exponentiation

// 3. Increament and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; // 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1; // 4
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter; // 3
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--; // 2
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`);
