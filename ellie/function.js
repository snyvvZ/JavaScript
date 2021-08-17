// function
// 프로그램을 구성하는 기본적인 빌딩 블럭
// 여러번 재사용 가능
// 한가지의 테스크가 어떤 값을 계산하기 위해 사용

// function 정의
// function name(param1, param2) { body... return; }
// - 하나의 함수는 한가지의 일만 하도록 한다.
// - 네이밍은 커멘드 또는 동사 형태로 이름을 정한다.
// - 함수 안에서 너무 많은 것을 수행하고 있진 않는지 생각해보기
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

// 1. function
function printHello() {
  console.log("hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("hello");

// 2. Parameters
// object는 레퍼런스로 전달되기 때문에 함수 안에서 object의 값을 변경하면 그대로 메모리에 변경됨
function changeName(obj) {
  obj.name = "coder";
}
const shinyeong = { name: "shinyeong" };
changeName(shinyeong);
console.log(shinyeong);

// 3. Default Parameters - ES6에서 추가됨
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Default Parameter를 설정하지 않으면 from이 undefined으로 출력됨

// 4. Rest parameters - ES6에서 추가됨
function printAll(...args /* 배열 형태로 전달 */) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("하이", "에이치아이", "신영");

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);

  // 자식은 부모에게서 전달된 message를 확인할 수 있지만, childMessage는 부모에서 사용 불가능
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // error console.log(childMessage);
}
printMessage();
// error console.log(message);

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 7. Early Return,
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
    return;
  } // else ~~
}

// NOTE
// 함수 표현식과 선언식의 차이
// 함수 표현식은 hoisting 가능
// https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/ 참조
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2Callback hell
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes");
};

// named function
const printNo = function print() {
  console.log("no");
  // print(); 멈춰!
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: 선언함과 동시에 호출
(function hello() {
  console.log("IIFE");
})();
