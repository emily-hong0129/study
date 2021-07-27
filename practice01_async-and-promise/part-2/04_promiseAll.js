const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  return Promise.all([
    getDataFromFilePromise(user1Path), 
    getDataFromFilePromise(user2Path)
    ])
  .then(data => data.map(data => JSON.parse(data)));
  // .then(result => { // result : [user1, user2] 형태
  //   console.log('[' + result[0] + ',' + result[1] + ']')
  //   return '[' + result[0] + ',' + result[1] + ']';
  // })
  // .then(arr => {
  //   return JSON.parse(arr);
  // })
}

// readAllUsers()

module.exports = {
  readAllUsers
}