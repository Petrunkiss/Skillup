// this - Контекст вызова
// this - это тот кто вызывает функцию
// Не важно где обьявлена ф-ция, важно кто ее вызывает

// ============================================
// this in global functions and global scope

// function greet() {
//     console.log("hello", this);
// }

// greet();
// window.greet();
// this.greet();

// ============================================
// this in objects and methods
// const ihor = {
//     name: "Ihor",
//     age: 25,

//     info() {
//         console.log(this.name, this.age);
//     },
// };

// const marina = {
//     name: "Marina",
//     age: 18,

//     info() {
//         console.log(this.name, this.age);
//     },

//     greet() {
//         this.info();
//     },
// };

// ihor.info();
// // marina.info();
// marina.greet();

// ======================================
// this in callback functions lost contecst

// const ihor = {
//     name: "Ihor",
//     age: 25,

//     info() {
//         console.log(this.name, this.age);
//     },
// };

// function greet(clb) {
//     console.log(`Викликаю колбек clb: ${clb()}`);
// }

// greet(ihor.info); // lost context. Потерялся this от ihor
// ======================================
// this in arrow functions контекст береться з місця її написання

// const info = () => {
//     console.log("Grlobal scope info", this);
// };

// info();
// window.info(); // window.info is not a function
// this.info(); // window.info is not a function

// const ihor = {
//     name: "Ihor",
//     age: 25,
// };

// ihor.info = () => {
//     console.log("Grlobal scope info", this);
// };

// console.log(ihor);
// ihor.info();

// =============================================
// this in event listeners
// let btn = addEventListener("click", () => {
//     document.body.style.background = "teal";
//     console.log(this);
// });

// let btn = addEventListener("click", function (evt) {
//     document.body.style.background = "teal";
//     console.log(evt.target);
// });

// ======================================
//  this in ES5 Clases

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const ihor = new User("Ihor", 25);
// const sveta = new User("Sveta", 18);

// console.log(ihor);
// console.log(sveta);

// ==================================
// this in ES6 Clases

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const ihor = new User("Ihor", 25);
// const sveta = new User("Sveta", 18);

// console.log(ihor);
// console.log(sveta);

// qwe.sdf()
