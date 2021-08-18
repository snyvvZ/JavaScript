// async & await
// Promise를 깔끔하게 사용할 수 있지만, 무조건 Promise를 대체해서 사용하는 것은 아님

// 1. async
// Promise로 반환됨
async function fetchUser() {
  // do network request in 10 sec...
  return "snyvv";
}

const user = fetchUser();
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🦄";
}

async function getBanana() {
  await delay(1000);
  return "🐯";
}

/*  Promise 예시
function getBanana() {
  return delay(1000).then(() => "🐯");
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
*/

// await 병렬 처리
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 먼저 불려지는 것만 노출
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
