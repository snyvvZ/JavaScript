// 1. 객체 사용하기
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);

/*
function print(hero){
  const text = `어벤져스 ${hero.alias}의 이름은 ${hero.name}이고, 배우 이름은 ${hero.actor}이다.`;
  console.log(text);
}
*/

/* 객체 비구조화 할당
function print(hero){
  const { alias, name, actor } = hero;
  const text = `어벤져스 ${alias}의 이름은 ${name}이고, 배우 이름은 ${actor}이다.`;
  console.log(text);
}
*/

// 파라미터에서 객체 비구조화 할당
function print({ alias, name, actor }){
  const text = `어벤져스 ${alias}의 이름은 ${name}이고, 배우 이름은 ${actor}이다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);


// 2. 객체 안에 함수 넣기
const dog = {
  name: '댕댕히',
  sound: '댕댕!',
  say: function(){ 
    // 함수가 객체안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 된다.
    // 함수를 선언 할 때에는 이름이 없어도 됨
    // 객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않음
    // > function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문
    console.log(this.sound);
  }
}

dog.say();


// 3. Getter 함수와 Setter 함수