// 변수로 만들기
const a = 1;
const b = 2;
const sum = a + b;
console.log(sum);

// 함수로 만들기
function add(c, d) {
  return c + d;
  console.log('호출되지 않는 코드');
}
const sum2 = add(1, 2);
console.log(sum2);

// 이름 넣기
const hello = (name) => {
  console.log(`Hello, ${name}!`);
}
hello('snyvv')