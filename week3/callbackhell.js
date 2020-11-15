const { resolve } = require('path');

const add3 = (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(input + 1), 1000;
    });
  });
};

add3(0)
  .then((resolve) => {
    console.log(resolve);
    return resolve + 1;
  })
  .then((resolve) => {
    console.log(resolve);
  });
