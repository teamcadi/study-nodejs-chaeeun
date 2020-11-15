const { resolve } = require('path');
const { rejects } = require('assert');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promise
  .then((num) => {
    num = num * 2;
    return num;
  })
  .then((num) => {
    num = num * 3;
    console.log(num);
    return num;
  })
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num / 2), 1000);
    });
  })
  .then(console.log);
