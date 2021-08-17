// 입력, 연산, 출력

// 1. Use strict
// ES5에서 추가
"use strict";

// 2. Variable
// let (ES6에서 추가)

// global scope - 최소한으로 사용
let name = "Shinyeong";
console.log(name);
name = "hello";
console.log(name);

// Block scope
{
  let name2 = "Shinyeong";
  console.log(name2);
  name2 = "hello";
  console.log(name2);
}
// Error > console.log(name2);

// var -> 사용 시 등짝 스매싱
console.log(age);
age = 4; // var hoisting > 선언도 전에 값을 넣을 수 있음
console.log(age);
var age;

{
  var age2;
  age2 = 6;
}
console.log(age2); // Block scope 불가

// 3. Constants
// immutable data (값이 변경될 수 없음)
// 왠만하면 값을 할당한 뒤 변경하지 않을 때 사용
// - 1. 보안상의 이유
// - 2. thread 절약
// - 3. 휴먼에러 방지
const daysInWeek = 7;

// 4. Variable types
// primitive (single item: number, string, boolean, null, undefined, symbol)
// object (box container)
// function, first - class function (함수도 다른 데이터 타입처럼 다른 변수에 할당 가능 & 인자로 전달 가능)

let count = 12; // 정수
let size = 11.2; // 소수점
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number 주의사항
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const shinyeong = "shinyeong";
const greeting = "hello " + shinyeong;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloShinyeong = `hi ${shinyeong}!`; // template literals (string)
console.log(`value: ${helloShinyeong}, type: ${typeof helloShinyeong}`);
console.log("value: " + helloShinyeong + ", type: " + typeof helloShinyeong);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const text = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${text}, type: ${typeof text}`);

// null
let noting = null; // 값이 비어있음
console.log(`value: ${noting}, type: ${typeof noting}`);

// undefined
let x = undefined; // 선언은 되었지만 아무것도 할당되지 않음
// 또는 let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, 자료구조에서 고유한 식별자가 필요할 때 사용
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const symbol11 = Symbol.for("id");
const symbol22 = Symbol.for("id");
console.log(symbol11 === symbol22);

// Dynamic typing
let textDynamic = "hello";
console.log(`value: ${textDynamic}, type: ${typeof textDynamic}`);
textDynamic = 1;
console.log(`value: ${textDynamic}, type: ${typeof textDynamic}`);
textDynamic = "7" + 5;
console.log(`value: ${textDynamic}, type: ${typeof textDynamic}`);
textDynamic = "8" / "2";
console.log(`value: ${textDynamic}, type: ${typeof textDynamic}`);

// Note!
// Immutable data type: 데이터 자체를 절대 변경하지 못함
// Muttable: 변경이 가능한 데이터 타입
