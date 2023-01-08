// HOF - Hight order function (функции высшего порядка)
// функция высшего порядка может принимать как параметр другую ф-цию и(или) возвращать другую функцию

// Функция обратного вызова - ее вызыват интерпетатор в нужный момент
// Callback function

// Функция обратного вызова - это функция, которая передается другой функции в качестве аргумента и та, 
//в свою очередь вызывает переденную функцию

// const myFync = () => {
//     console.log("Hello Andrii");
// };

// // myFync();
// // const greetUser = (myFync, myFync, myFync)=>{}

// const greetUser = (clb) => {
//     // console.log(clb);
//     clb();
// };

// greetUser(myFync);
// ===========================================
// Claculator;
// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// function calculate(a, b, callback) {
//     // console.log(a);
//     // console.log(b);
//     // console.log(callback);
//     return callback(a, b);
// }

// let res = calculate(10, 5, sum);
// res = calculate(15, 5, sum);
// res = calculate(2, 5, mult);

// console.log(res);

// function calculate(a, b, clb) {
//     return clb(a, b);
// }

// calculate(10, 20, function (a, b) {
//     console.log(a + b);
// });

// calculate(100, 20, function (a, b) {
//     console.log(a - b);
// });

// (a, b) => {
//     console.log(a + b);
// }

// =============================
// Event Listeners

// let btn = document.addEventListener("click", () => {
//     console.log("Click the button");
// });

// function onBtnClick() {
//     console.log("Click the button");
//     document.body.style.background = "magenta";
// }

// let btn = document.addEventListener("click", onBtnClick);
