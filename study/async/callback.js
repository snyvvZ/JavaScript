"use strict";

// JavaScript: synchronous
// 호이스팅이 된 이후부터 작성한 순서에 맞춰 동기적으로 실행됨
// hoisting: var, function declaration

console.log("1");
setTimeout(() => {
  // callback function
  console.log("2");
}, 1000);
console.log("3");

// 동기 callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("Immediately"));

// 비동기 callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// ** 콜백 지옥 체험 **
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "snyvv" && password === "hi") ||
        (id === "coder" && password === "hello")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "snyvv") {
        onSuccess({ name: "snyvv", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// id & password 입력받아 로그인하기
// id를 이용해 역할 요청하여 받아오기
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백 체인의 문제점
// - 가독성이 떨어진다
// - 비즈니스 로직을 파악하기 어렵다
// - 디버깅이 어려워 유지보수가 힘들다
