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

const hours = 10
const minutes = 25

minutes === 0 ? console.log(`Time: ${hours} ч`) : console.log(`Time: ${hours} ч ${minutes} м`)

