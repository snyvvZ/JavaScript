// 1. 배열에 객체 넣기
const objects = [{name: '댕댕이'}, {name: '냥냥이'}];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);
console.log(objects.length) // 3. 배열의 크기 알아내기

// 2. 배열에 새 항목 추가하기
// 배열의 내장함수 push
objects.push({
  name: '치타'
});
console.log(objects);
console.log(objects.length) // 3. 배열의 크기 알아내기