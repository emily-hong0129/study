const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersChaining = () => {
  // let arr = [];
  return getDataFromFilePromise(user1Path)
  .then((user1) => {  // 받아져있는 상태
    // arr.push(JSON.parse(user1));
    return getDataFromFilePromise(user2Path)
    .then((user2) => {
      // arr.push(JSON.parse(user2));
      // return arr;
      return '[' + user1 + ',' + user2 + ']'; // 배열형태
    })
    .then((arr) => {
      return console.log(JSON.parse(arr))
    })
  })
}

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}