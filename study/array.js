// NOTE 자료구조
// '비슷한' 타입의 object들을 묶어둔 것을 자료 구조라고 함
// 타입이 있는 언어에서는 동일한 타입의 데이터만 담을 수 있음

// 추후 TODO 자료구조와 알고리즘 - 검색, 삽입, 정렬, 삭제
"use strict";

// Array
// 1. 선언
const arr1 = new Array();
const arr2 = [];

// 2. Index를 통한 배열 접근
const animals = ["🐱", "🐶"];
console.log(animals);
console.log(animals.length);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
// last Index
console.log(animals[animals.length - 1]);

// 3. Looping
console.clear();
// 3-1. for
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// 3-2. for of
for (let animal of animals) {
  console.log(animal);
}
// 3-3. forEach
// 배열의 각 요소에 대해 지정된 작업을 수행
animals.forEach(function (animal /* , index, array */) {
  console.log(animal);
});

// 4. 삽입, 삭제, 복사
// push: 맨 뒤에 삽입
animals.push("🐯", "🐻");
console.log(animals);

// pop: 맨 뒤의 아이템 삭제
animals.pop();
animals.pop();
console.log(animals);

// splice: 지정된 위치에서 지우기
animals.push("🐮", "🦁", "🦄");
console.log(animals);
animals.splice(1, 1); // 원하는 인덱스만 지정할 경우 지정한 인덱스부터 모든 데이터를 지움
console.log(animals);
animals.splice(1, 1, "🐰", "🦊"); // 지운 곳에 데이터 삽입
console.log(animals);

// 두가지의 배열 묶기
const animals2 = ["🐷", "🐨"];
const newAnimals = animals.concat(animals2);
console.log(newAnimals);

// 5. 검색
console.clear();
console.log(animals);
console.log(animals.indexOf("🐱"));
console.log(animals.indexOf("🦊"));

// includes
console.log(animals.includes("🐱"));
console.log(animals.includes("🐸"));
console.log(animals.indexOf("🐸"));

// lastIndexOf
console.clear();
animals.push("🐱");
console.log(animals);
console.log(animals.indexOf("🐱"));
console.log(animals.lastIndexOf("🐱"));
