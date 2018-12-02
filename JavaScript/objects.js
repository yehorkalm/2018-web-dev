// Create an object and an array which we will use in our facebook exercise. 

// 2. Create an array which contains the object you have made above and name the array "database".
let database = [{
  username: 'user',
  password: 'pwrd',
}, {
  username: '123',
  password: '123',
}, {
  username: '321',
  password: '321',
}, {
  username: 'qwe',
  password: 'qwe',
}];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsfeed = [{
  username: 'username1',
  timeline: 'timeline1'
}, {
  username: 'username2',
  timeline: 'timeline2'
}, {
  username: 'username3',
  timeline: 'timeline3'
}];

let username = prompt('username');
let password = prompt('password');

function signIn() {
  if (userExists(username, password)) {
    console.log(newsfeed);
  } else {
    console.log('something went wrong');
  }

}
signIn();
// console.log(newsfeed);

function userExists(username, password) {
  // database.forEach(account => {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      return true;
    }
  };
  return false;
}