// 1. forEach
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

// for문
for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}

// forEach문
superheroes.forEach((hero) => {
  console.log(hero);
});
// forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다.
// 이 함수의 파라미터 hero는 각 원소를 가르키게 됩니다.

// 2. map
// 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = array.map((n) => n * n);
console.log(squared);

// 3. indexOf
// 항목이 몇번째 원소인지 찾아주는 함수입니다.
const index = superheroes.indexOf("토르");
console.log(index);

// 4. findIndex
// 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없습니다.
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

// id 가 3 인 객체가 몇번째인지 찾으러면, findIndex 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있습니다.
const indexFindOf = todos.findIndex((todo) => todo.id === 2);
console.log(indexFindOf);

// 5. find
// findOf는 찾아낸 값이 몇번째인지 찾아내지만,
// find는 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환합니다.
const todo = todos.find((todo) => todo.id === 2);
console.log(todo);

// 6. filter
// 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듭니다.
const taskNotDone = todos.filter((todo) => todo.done === false);
// const tasksNotDone = todos.filter(todo => !todo.done);
console.log(taskNotDone);

// 7. splice
// 배열에서 특정 항목을 제거할 때 사용합니다.
const numbers = [10, 20, 30, 40];
const indexSplice = numbers.indexOf(20);
numbers.splice(indexSplice, 2);
// 첫번째 파라미터는 어떤 인덱스부터 지울지를 의미하고 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미합니다.
console.log(numbers);

// 8. slice
// 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않는 다는 것입니다.
const numbersSlice = [10, 20, 30, 40];
const sliced = numbersSlice.slice(0, 2);
// 첫번째 파라미터는 어디서부터 자를지, 그리고 두번째 파라미터는 어디까지 자를지 를 의미합니다.
console.log(sliced);
console.log(numbersSlice);

// 9. shift & pop
