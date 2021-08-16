"use strict";

// Array
// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index를 통한 배열 접근
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length - 1); // 마지막 인덱스를 받아옴

console.clear();
// 3. Looping over an array
// print all fruits
// 3-1. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 3-2. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// 3-3. forEach
// (command + click) -> callback function: value, index, array
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
// array function
fruits.forEach((fruit) => console.log(fruit));

// 4. 추가, 삭제, 복사
// push: 배열의 맨 끝에 추가
fruits.push("딸기", "복숭아");
console.log(fruits);

// pop: 맨끝의 아이템 삭제
fruits.pop();
fruits.pop();
console.log(fruits);

// splice: 지정된 위치에서 아이템 조작
fruits.push("딸기", "복숭아", "레몬");
console.log(fruits);
fruits.splice(1, 1); // delete count를 적지 않으면 지정된 배열을 제외한 나머지를 모두 지움
console.log(fruits);
fruits.splice(1, 1, "메론", "수박");
console.log(fruits);

// 두개의 배열 묶기
const fruits2 = ["아보카도", "코코넛"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
// 인덱스 찾기
console.clear();
console.log(fruits);

// index of
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("수박"));
console.log(fruits.indexOf("코코넛"));

// includes
console.log(fruits.includes("수박"));
console.log(fruits.includes("코코넛"));

// lastIndexOf
console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.lastIndexOf("사과"));
