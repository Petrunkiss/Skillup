// ------------------------------------------------------ Objects ---------------------------------------------

// const students = ['ira', 'alex', 'bob']

// // Проверить массив ли это - true
// console.log(Array.isArray(students));

// // Object literal
// // {}
// const user = {
//     name: 'Alex',
//     pro: 'no one',
//     age: 36,
//     car: {
//         title: 'Porshe',
//         model: 911,
//         tyres: ['Michelin', 'Goodrich', 'Yokohama'],
//         milage: 50,
//         dealership: {
//             city: 'Zap',
//             code: 12345,
//             street: 'Vinogradnaya'
//         },
//     },
//     hobbies: ['rally', 'beer', 'girls']
// };

// console.log(user.name);
// console.log(user.age);

// // // Проверить массив ли это - false
// // console.log(Array.isArray(user));

// // Get value
// user.name;
// user.age;

// // Update value

// user.pro = 'Software developer'

// // Add value

// user.status = 'online'
// user.tasks = 'true'

// console.log(user);

// // Remove value

// delete user.age;
// delete user.pro;

// console.log(user);

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// const car = {
//             title: 'Porshe',
//             model: 911,
//             tyres: ['Michelin', 'Goodrich', 'Yokohama'],
//             milage: 50,
// }
// let hobbies = ['rally', 'beer', 'girls']

// // //Old school
// // const user = {
// //     name: 'Alex',
// //     pro: 'no one',
// //     age: 36,
// //     car: car,
// //     hobbies: hobbies,
// // };

// //Modern ES6

// const user = {
//     name: 'Alex',
//     pro: 'no one',
//     age: 36,
//     car,
//     hobbies,
// };

// ++++++++++++++++++++++++++++++++++++++++++++++++++ dynamic object keys

// let dog = {
//     age: 2,
//     name: 'doggy',
//     color: 'white',
// }
// let cat = {
//     age: 2,
//     name: 'kitty',
//     color: 'black',
// }
// console.log(dog['name']);
// console.log(cat['name']);


// ++++++++++++++++++++++++++++++++++++++++++++++++++ dynamic object keys


// let state = ['Usa', 'China', 'russia', 'india']
// let vaccina = ['Pfizer', 'Coronovac', 'Spupnik', 'AstraZeneca']

// const bank = {};
// for (let i = 0; i < state.length; i++) {
//     bank[state[i]] = vaccina[i]
// }

// console.log(bank);

// ++++++++++++++++++++++++++++++++++++++++++++++++++ for...in

// let likes = {
//     goot: 150,
//     neutral: 20,
//     bad: 75,
// }
// // keys
// for (const key in likes) {
//     console.log(key);   
// }
// // values
// for (const key in likes) {
//     console.log(likes[key]);   
// }
// // key: value
// for (const key in likes) {
//     console.log(`${key}: ${likes[key]}`);   
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++ раскладывать 

// let likes = {
//     goot: 150,
//     neutral: 20,
//     bad: 75,
// }

// let keys = Object.keys(likes)
// console.log(keys)

// let values = Object.values(likes)
// console.log(values)

// let totalLikes = null;

// for (const item of values) {
//     totalLikes += item
// }
// console.log(totalLikes)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ rest / spread operator в массиве

// let state = ['Usa', 'China', 'russia', 'india']
// let vaccina = ['Pfizer', 'Coronovac', 'Spupnik', 'AstraZeneca']

// const concatArrays = ['Запись в начало', ...state, ...vaccina, 'Запись в конец']
// console.log( concatArrays )

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ rest / spread operator в обьектах

// const alex = {
//     name: 'Alex',
//     pro: 'no one',
//     age: 36,
//     status: 'online',
// }

// const valeria = {
//     ...alex,
//     name: 'valeria',
//     age: 18,
//     hobbies: ['a', 'b', 'c'],
// }

// console.log(valeria);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ rest

// let state = ['Usa', 'China', 'russia', 'india']

// const [AA, BH, ...rest] = state
// console.log(AA);
// console.log(BH);
// console.log(rest);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ rest

// let state = ['Usa', 'China', 'russia', 'india']
// const [, , RU] = state

// console.log(RU);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ destructurization in objects


// let car = {
//     title: 'Porshe',
//     model: 911,
//     tyres: ['Michelin', 'Goodrich', 'Yokohama'],
//     milage: 50,
//     dealership: {
//         city: 'Zap',
//         code: 12345,
//         street: 'Vinogradnaya',
//     },
// }

// // destructurization - без изменения имени
// const { street } = car.dealership
// console.log(street);
// // Naming destructurization - с изменением имени
// const { city: gorod } = car.dealership
// console.log(gorod);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++  destructurization in objects

// let car = {
//     title: 'Porshe',
//     model: 911,
//     tyres: ['Michelin', 'Goodrich', 'Yokohama'],
//     milage: 50,
//     dealership: {
//         city: 'Zap',
//         code: 12345,
//         street: 'Vinogradnaya',
//     },
// }

// const user = {
//     name: 'Alex',
//     pro: 'no one',
//     age: 36,
//     car,
// }

// // console.log(user.car.dealership.street);

// // const { street } = user.car.dealership
// // console.log(street);

// //двойная деструктуризация при конфликте имён с двумя обьектами названными одинаково 
// const dealership = {
//     city: 'Zap',
//     code: 12345,
//     street: 'Peremohy',
// }

// const { 
//     dealership: { street },
// } = user.car;
// console.log(street);

