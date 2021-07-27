const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async() => {
  let arr = []
  let user1 = await getDataFromFilePromise(user1Path)
  let user2 = await getDataFromFilePromise(user2Path)
  
  arr.push(user1)
  arr.push(user2)

  return arr.map((el) => {
    return JSON.parse(el)
  })
}

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}