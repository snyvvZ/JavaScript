// JSON
// JavaScript Object Notation

// Object { key: value }
// - 데이터를 주고 받을 때 쓸 수 있는 가장 단순한 포맷이다.
// - 텍스트를 기반으로 한 가볍고 사람 눈으로 읽기 편하며, 키와 밸류로 이루어진 파일 포맷이다.
// - 데이터를 서버와 주고 받을 떄 직렬화 하거나 전송할 때 사용한다.
// - NOTE 중요: 프로그램 랭귀지나 플랫폼에 상관없이 쓰일 수 있다.

// 1. Object to JSON
// stringify(obj)
// Oberloading: 어떤 파라미터 혹은 몇개의 파라미터를 전달 하는지에 따라서 각각 다른 방식으로 사용할 수 있음
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
// string으로 변환되어 JSON으로 만들어지지만,
// 함수나 JavaScript만의 데이터(e.g. Symbol)는 포함되지 않음
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]); // 원하는 property만 변환 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "shinyeong" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
// object를 변환할 때는 함수가 포함되어 있지 않아서
rabbit.jump();
// Error남 -> obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// NOTE 유용한 사이트
// JSON Diff - 버전 비교
// JSON Beautifier
// JSON Parser - JSON을 Object로 파싱
// JSON Validator - 유효성 확인
