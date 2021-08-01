// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = "global name";
{
  let name = "Shinyeong";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name); // 출력되지 않음
console.log(globalName); // 필요시에만 사용(메모리)

// var -> dont' ever use this!
// var hoisting (선언도 하기 전에 값을 넣을 수 있음)
{
  console.log(age);
  age = 4;
  console.log(age);
  var age;
}
console.log(age); // block scope 무시하여 출력됨

// 3. Constants, r(read only) 값을 변경할 수 없음
// use const whenever possible.
// only use let if variable needs to chnage.
const dayInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive -> single item: number, string, boolean, null, undefined, symbol
// ㄴ 값 자체가 메모리에 저장됨
// object: box container
// ㄴ 오브젝트가 가르키는 오브젝트가 ref에 저장된다. (오브젝트의 변수는 변경 가능)
// function: first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890n; // over(-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + ", type: " + typeof helloBob); // don't use

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // 고유한 식별자를 만들기 때문에 결과는 false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21; // object 자체는 const 이지만 object 안의 변수는 변경 가능
console.log(ellie.age);

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75 string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // 4 number
console.log(text.charAt(0)); // Error!
