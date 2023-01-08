// CALL, APPLY, BIND - явное указание THIS

// call - рабоатет с примитивами, возвращает и вызывает функцию
// аpply - рабоатет с массивом, возвращает и вызывает функцию
// bind - рабоатет с примитивами, возвращает и НЕ вызывает функцию

// ==============================================
// Call

// const ihor = {
//     name: "Ihor",
//     age: 25,

//     info() {
//         // console.log(this.name, this.age);
//         console.log(this);
//     },
// };

// ihor.info();

// const sara = {
//     name: "Sara",
//     age: 20,
// };

// const andrii = {
//     name: "Andrii",
//     age: 50,
// };

// sara.info(); // error

// ihor.info.call(sara);

// ihor.info.call(andrii);

// --------------------------------------------

// const ihor = {
//     name: "Ihor",
//     age: 25,

//     info() {
//         console.log(this.name, this.age);
//     },
// };

// function greet(clb) {
//     // console.log(`Викликаю колбек clb: ${clb()}`);
//     clb();
// }

// greet(() => {
//     return ihor.info.call(ihor);
// });

// greet(ihor.info);
// ===============================
// Apply
// let arr = [100, 20, 50, 4, 1010];

// const min = Math.min(100, 20, 50, 4, 1010);
// const min = Math.min(...arr);
// const min = Math.min.apply(Math, arr);

// console.log(min);

// ====================================
// Bind
// const ihor = {
//     name: "Ihor",
//     age: 25,

//     info() {
//         // console.log(this.name, this.age);
//         console.log(this);
//     },
// };

// const andrii = {
//     name: "Andrii",
//     age: 50,
// };

// let res = ihor.info.bind(andrii);
// console.log(res());

// ihor.info.bind(andrii)();

// let btn = addEventListener("click", ihor.info);
// let btn = addEventListener("click", ihor.info.bind(ihor));
// let btn = addEventListener("click", ihor.info.call(ihor));

// let btn = addEventListener("click", () => {
//     return ihor.info.call(ihor);
// });
