//인터프린터 방식 언어

const { Console } = require('console');

function myTimer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time} ms 걸림`);
    }, time);
  });
}

async function main() {
  //  const str1 = await myTimer(3000);
  //  const str2 = await myTimer(4000);
  //  const str3 = await myTimer(3000);

  const arr = await Promise.all([myTimer(3000), myTimer(4000), myTimer(3000)]);
  //validator

  //여기서는 동기화가 필요
  console.timeEnd('main');
}

main();
