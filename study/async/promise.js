"use strict";

// Promise: Javascript object for asynchronous operation
// State: pending -> fulfilled or rejected
// Producer vs Consumer: 정보 제공 & 정보를 사용 하는 부분을 구분지어 사용

// 1. Producer
// NOTE 주의: 새로운 promise가 만들어 질 때는 바로 실행됨
const promise = new Promise((resolve, reject) => {
  // doring some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("snyvv");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("마지막으로 무언가 수행하고 싶을 때"));

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    setTimeout(() => reject(new Error(`error: ${hen} => 달걀`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
  });

getHen()
  .then(getEgg) // (hen) => getEgg(hen) 생략 가능
  .catch((error) => {
    return "빵";
  })
  .then(cook) // (egg) => cook(egg) 생략 가능
  .then(console.log)
  .catch(console.log); // (meal) => console.log(meal) 생략 가능
