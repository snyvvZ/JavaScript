// 변수로 만들기
const a = 1;
const b = 2;
const sum = a + b;
console.log(sum);

// 함수로 만들기
function add(c, d) {
  return c + d;
  console.log("호출되지 않는 코드");
}
const sum2 = add(1, 2);
console.log(sum2);

// 이름 넣기
const hello = (name) => {
  console.log(`Hello, ${name}!`);
};
hello("snyvv");

// 함수 선언식(function)과 함수 표현식의 주요 차이점은
// 화살표 함수에서 가르키는 this 와 function 에서 가르키는 this 가 서로 다르다는 것
// 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.

// 추가: 클로져로 사용 & 콜백으로 사용 (다른 함수의 인자로 넘길 수 있음)
