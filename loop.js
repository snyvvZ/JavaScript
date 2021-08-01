// 1. for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1-1. for & 배열
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 2. while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} // false 로 전환이 되지 않는다면 반복문이 끝나지 않고 영원히 반복

// 3. for...of
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

// 4. 객체를 위한 반복문 for...in
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};
console.log(Object.entries(doggy)); // [[키, 값], [키, 값]] 형태의 배열로 변환
console.log(Object.keys(doggy)); // [키, 키, 키] 형태의 배열로 변환
console.log(Object.values(doggy)); // [값, 값, 값] 형태의 배열로 변환

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

// 5. break 와 continue
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}

// numbers 라는 배열을 파라미터로 받아서 총합을 구하는 함수 만들기
function sumOf(numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

// 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환하기
function biggerThanThree(numbers2) {
  const array = [];
  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 3) {
      array.push(numbers2[i]);
    }
  }
  return array;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2)); // [4, 5, 6, 7]