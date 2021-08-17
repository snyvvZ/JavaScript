// 1. String concatenation
// 문자열과 문자열을 합쳐서 문자열을 만들 수 있음
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

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

// 4. 할당
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. 비교
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. 논리 비교 :
// || or
// && and
// !not

const value1 = false;
const value2 = 4 < 2;

// || or - 어떤 것이든 하나라도 true면 true를 반환
console.log(`or: ${value1 || value2 || check()}`);

// && and - 모두가 true여야 true를 반환
console.log(`or: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // 시간 낭비
    console.log("!!");
  }
  return true;
}

// ! not
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// Equality 퀴즈
console.clear();
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators
// if, else if, else
const name = "shinyeong"; // 변경해보기
if (name === "shinyeong") {
  console.log("welcom, shinyeong");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
console.log(name === "shinyeong" ? "yes" : "no");

// 10. switch
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("Go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("Welcome!");
    break;
  default:
    console.log("Who are U?");
    break;
}

// 11. Loops
// while
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while
// 실행 후 조건을 검사
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// 0부터 10까지 짝수인 숫자만 호출
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`quiz1: ${i}`);
  }
}

// 0부터 10까지 증가시키면서 8을 만나면 멈추기
for (let i = 0; i < 11; i++) {
  if (i < 8) {
    console.log(`quiz2: ${i}`);
  }
}
