// MDN Object - Static Method 참조

const name = "shinyeong";
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

// 1. Literal & property
// 선언 방법
const obj1 = {}; // Object literal
const obj2 = new Object(); // Object constructor

// Object
// object = { key : value };
function printObject(person) {
  console.log(person.name);
  console.log(person.age);
}
// 추가
const shinyeong = { name: "shinyeong", age: 4 };
printObject(shinyeong);
// 삭제
delete shinyeong.hasJob;
console.log(shinyeong.hasJob);

shinyeong.hasJob = true;
console.log(shinyeong.hasJob);

// 2. Computed properties
console.log(shinyeong.name);
// string 타입으로 지정해야 함
console.log(shinyeong["name"]);
// Computed를 이용한 추가
shinyeong["hasJob"] = true;
console.log(shinyeong.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(shinyeong, "name");
printValue(shinyeong, "age");

// 3. Property value shorthand
const person1 = { name: "jihoon", age: 5 };
const person2 = { name: "seki", age: 4 };
const person3 = { name: "aehee", age: 7 };

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
const person4 = new Person("shinyeong", 34);
console.log(person4);

// 5. in operator
// 키가 있는지 확인
console.log("name" in shinyeong);
console.log("random" in shinyeong);
console.log(shinyeong.random);

// 6. for...in vs for...of
// for (key in obj)
console.clear();
for (key in shinyeong) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "shinyeong", age: 34 };
const user2 = user;
console.log(user2);
user2.name = "coder";
console.log(user);

// Object 복사하기
const user3 = Object.assign({}, user);
console.log(user3);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixied = Object.assign({}, fruit1, fruit2);
console.log(mixied.color);
console.log(mixied.size);
