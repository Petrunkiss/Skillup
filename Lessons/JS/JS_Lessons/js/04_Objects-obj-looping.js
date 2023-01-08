// for...in
// Object.keys
// Object.values
// Object.entries
// Array for...of

// Obj looping
// ==================================
// for...in - only for objects

// let likes = {
//     good: 150,
//     neutral: 21,
//     bad: 75,
// };

// keys
// for (let key in likes) {
//     console.log(key);
// }

// values
// for (let key in likes) {
//     console.log(likes[key]);
// console.log(likes.key); // undefined
// }

// keys and values
// for (let key in likes) {
//     console.log(`${key}: ${likes[key]}`);
// }

// ===========================

// let users = ["vova", "sara", "bob", "mike"];

// for (const item of users) {
//     console.log(item);
// }

// for (const i in users) {
// console.log(i);
// console.log(users[i]);
// }

// =================================
// Object.keys, Object.values

let likes = {
    good: 150,
    neutral: 20,
    bad: 100,
};

// let keys = Object.keys(likes);
// console.log(keys);

// let values = Object.values(likes);
// console.log(values);

// let totalLikes = null;

// for (const value of values) {
//     totalLikes += value;
// }

// console.log(totalLikes);

// ====================================
// Object.entries() - массив массивов

// let arr = Object.entries(likes);

// console.log(arr);
// console.log(arr[1]);
