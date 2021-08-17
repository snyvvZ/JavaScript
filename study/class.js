// NOTE 개념
// Class는 연관있는 데이터를 묶어두는 컨테이너 같은 역할
// 속성(field)와 행동(method)으로 구성
// - methos는 생략 가능 -> data class
// - 캡슐화, 상속과 다양성

// Class를 이용하여 data를 넣어 만드는 것이 object
// - 새로운 인스턴스를 생성하면 Object가 됨
// - Class는 정의만 한 것이라 실제 데이터는 아님

"use strict";
// 1. Class
// class: templte (ES6에서 추가됨) - prototype based
// object: instance of a class
class Person {
  // constructor - 생성자
  constructor(name, age) {
    // fields
    this.name = name;
    this.aga = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const shinyeong = new Person("shinyeong", 34);
console.log(shinyeong.name);
console.log(shinyeong.ate);
shinyeong.speak();

// 2. Getter & Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);

// 3. 상속과 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("세모");
  }

  // 필요한 함수만 재정의 -> override
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 4. instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
