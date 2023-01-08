// Замыкание - это механизм когда функции доступны внешние перменные

// Замыкание(англ.closure) в программировании — функция первого класса, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами.Говоря другим языком, замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

// let a = 10;

// function getNum() {
//     console.log(a);

//     function seyHello() {
//         console.log(`Hello ${user}`);
//     }

//     let user = "Andrii";
//     seyHello();
// }

// getNum();

// ============================================================

// function calc(n) {
//     return function () {
//         console.log(n + 10);
//     };
// }

// let res = calc(50);
// res = calc(20);
// res = calc(100);
// res = calc(500);

// res();

//==================================

// function increment(n) {
//     return function (i) {
//         console.log(n + i);
//     };
// }

function increment(n) {
    return function (i) {
        return function (u) {
            console.log(n + i + u);
        };
    };
}

// console.log(increment());

// let res = increment(10);
// res(50);
// console.log(res);

// let pizza = increment(5);
// pizza(40);

// Carryng
// increment(10)(5);
// increment(100)(500);

// increment(5)(8)(9);

// =================================================
// https://twitter.com/
// https://www.facebook.com/
// https://www.unian.net/
// https://www.ukr.net/

// function generateURI(domainName) {
//     return function (url) {
//         return `https://${url}.${domainName}`;
//     };
// }

// let fb = generateURI("com")("facebook");
// let tw = generateURI("com")("twitter");
// let unian = generateURI("net")("unian");

// console.log(fb);
// console.log(tw);
// console.log(unian);

// =======================================

let frameWorks = ["Vue", "Angular"];
console.log(frameWorks);

function frameworkManager() {
    let frameWorks = ["Vue", "Angular"];

    return {
        show() {
            console.log(frameWorks);
        },
        add(newItem) {
            frameWorks.push(newItem);
        },
    };
}

// console.log(frameworkManager());

let manager = frameworkManager();

// console.log(manager);

manager.add("React");
manager.show();
