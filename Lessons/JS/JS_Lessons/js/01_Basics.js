// --------------------------------------- Типы данных --------------------------------------------
// String - 'cool'
// Number - 123, 2.12
// Boolean - true, false

// null
// undefined

// BigInt - 12312312312312312321312n

// Symbol

// Object

// ''
// ""
// `` - backtiks

// --------------------------------------- Переменные --------------------------------------------

// let user = 'Ihor';
// let favoriteNumber = 100;
// const isOnline = false;

// --------------------------------------- Операторы --------------------------------------------

// строковые       +
// математические  +, -, *, /, %
// логические      !, ||, &&

// let num = 10;

// console.log(num);


// const song = 'don\'t worry\nbe\nhuggies' // нужно экранировать спец символы
// const song1 = "don't worry\nbe\nhuggies" // не нужно экранировать символы
// console.log(song);

// --------------------------------------- Методы строк --------------------------------------------


// let message = "I can't get no satisfaction and fun";
// const res = message.split(' ').reverse().join(' ');
// console.log(Array.isArray(res));
// console.log(res);

// //заменяет слово по значению
// let findWord = message.replace('satisfaction', 'pizza');

// console.log(findWord);

// --------------------------------------- Conditions --------------------------------------------

// let admin = ' ';

// if (admin) {
//     console.log(1);
// }

// let red = 'red'
// let yellow = 'yellow'
// let green = 'green'

// let res = green

// switch (res) {
//     case 'red':
//         console.log('red');
//     break;
//     case 'yellow':
//         console.log('yellow');
//     break;
//     case 'green':
//         console.log('green');
//     break;
// }

// --------------------------------------- Loops --------------------------------------------


// //выведение высокосного года
// for (let i = 0; i < 2022; i+=1) {
//     if (i % 4 == 0) {
//         console.log(i);
//     }

// }

// continue - пропускает 1 итерацию цикл
// break - останавливает цикл

// --------------------------------------- Console --------------------------------------------
// const sara = 'Sara'

// console.log(
// `%c${sara}`, `color:green; font-size: 40px`
// );

// --------------------------------------- Task 1 --------------------------------------------

// const hours = 10
// const minutes = 25

// minutes === 0 ? console.log(`Time: ${hours} ч`) : console.log(`Time: ${hours} ч ${minutes} м`)

// --------------------------------------- Arrays --------------------------------------------

// const usersGirls = ['tatiana', 'marina', 'valeria'];
// const usersBoys = ['alex', 'oleksii', 'vitaliy'];

// // находит индекс массива по значению / возвращает индекс и -1, если не нашёл
// //console.log(usersGirls.indexOf('tatiana'));
// // булит нахождение в массиве этого значения / возвращает - true, false
// //console.log(usersBoys.includes('alex'));

// //+++++++++++++++++++++++++++++++++++++ методы массивов
// //добавляет в конец массива
// usersBoys.push('pushedName1', 'pushedName2');

//console.log(usersBoys);

// push - добавляет в конец массива
// pop - удаляет последний элемент
// shift - удаляет первый элемент
// unshift - добавляет в начало

// splice - изменяет исходный массив и возвращает массив, содержащий удаленные элементы с № индекса по № индекса.
// console.log( usersBoys.splice(1,3) );
// console.log(usersBoys);

// slice - не изменяет исходный массив, возвращает новый массив элементов с № индекса по № индекса
// console.log(usersBoys.slice(1, 3));
// console.log(usersBoys);

// concat - возвращает новый массив и соединяет массивы
// console.log(usersBoys.concat(usersGirls));

// split - метод строки создающий массив из символов с делиметром по вхождению совпадений в параметре
// join - метод массива создающий строку из символов с делиметром по вхождению совпадений в параметре

// const str = 'торанабой';
// const res = str.split('').reverse().join('');
// console.log(res);

//++++++++++++++++++++++++++ parse url

// const url = 'https://www.youtube.com/watch?v=isP1bfcksuE&ab_channel=%D0%A3%D0%BB%D0%B8%D1%86%D0%B0%D0%A8%D0%BA%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE';
// let parse = url.split('?')[1];
// let keys = url.split('&');

// console.log(parse);
// console.log(keys);

//++++++++++++++++++++++++++++++ Array.from
// создаёт массив из стринги
// const arr = Array.from('123456789asd 12 12 asdasdfasd f sdf sadf');
// console.log(arr);

// --------------------------------------- Перебор массивов ----------------------------------------

//  const usersGirls = ['tatiana', 'marina', 'valeria'];

// for (const item of usersGirls) {
//     console.log(item);
// }

// ++++++++++++++++++++++++++++++++++++++ делаем большую 1-ю букву в каждом слове

// const usersGirls = ['tatiana', 'marina', 'valeria', 'svetlana'];
// const newUsersForOf = [];

// for (let item of usersGirls) {
//     const newItem = item.split('');

//     newItem[0] = item.charAt(0).toUpperCase();
//     item = newItem.join('');

//     newUsersForOf[item] = item;
//     //newUsersForOf.push(item);
// }

// console.log(usersGirls);
// console.log(newUsersForOf);

// for (let i = 0; i < usersGirls.length - 1; i++) {
//     const newItem = usersGirls[i].split('');
//     newItem[0] = newItem[0].toUpperCase();
//     usersGirls[i] = newItem.join('');
// }

// // самый короткий и правильный?

// let newUsers = [];
// for (let item of usersGirls) {
//     let newItem = item[0].toUpperCase() + item.slice(1);
//     newUsers.push(newItem);

// }
//  console.log(newUsers);

// ++++++++++++++++++++++++++++++++++++++++ Терминология простейших операций CRUD

// Creat
// Read
// Delete
// Update

// ++++++++++++++++++++++++++++++++++++++++++ нахождение мах числа в массиве

// const arr = [1, 2, 133, 142, -1, 0, 123]
// let max = 0;

// // Через цикл for
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > max) {
// //         max = arr[i]
// //     }
// // }

// // через метод Math.max(...argument)
// max = Math.max(...arr);
// console.log(max)

// ------------------------------------------------------ Functions ---------------------------------------------

// // function declaration
// function myFunc(){

// }
// // function expression
// const sayName = function(){

// }

// // Arrow function
// const showName = () => {

// } 

// // IIEF Immediately invoked function expression
// (function () {})();
// (() => {})();

// ++++++++++++++++++++++++++++++++++++ exemple
// function showName() {
//     console.log('Marina');
// }

// showName();

// ++++++++++++++++++++++++++++++++++++ arguments' length

// function getLength(){
//     console.log(arguments.length);

// } 

// getLength(1,2,3,4,5,6,745,111);

// +++++++++++++++++++++++++++++++++++++++++ Hoisting - поднятие переменной

