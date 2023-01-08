// Objects {
// proerty: value
// key: value
// свайство
// проп
// пропсы
// ключ
// }

// Array Literal
// []

// let students = ["glib", "ira", "alex", "petro"];

// console.log(typeof students);
// console.log(Array.isArray(students));
// console.log(students[2]);
// console.log(students[1]);

// CSS
// {
//     background-color: gray;
//     font-size: large;
//     text-align: center;
// }

// let obj = {
//     key: value,
//     key: value,
//     key: value,
//     key: value,
// };

// Object Literal
// {}
// const user = {
//     name: "Alex",
//     pro: "no one",
//     age: 36,
// };

// Get value
// user.name;
// user.age;

// Update value
// user.pro = "Softwarwe Developer";
// user.age = 35;

// Add value
// user.status = "On Line";
// user.tasks = true;

// Remove value
// delete user.age;
// delete user.pro;

// console.log(user);

// console.log(user.name);
// console.log(user.age);

// console.log(user);
// console.log(typeof user);
// console.log(Array.isArray(user));
// ===============================

let car = {
    title: "Porshe",
    model: 911,
    tyres: ["Michelin", "GoodYear", "Tokohama"],
    milage: 50,
    dealership: {
        city: "Zap",
        code: 12345,
        street: "Vydohradna",
    },
};

// console.log(car.dealership.code);
// console.log(car.tyres[1]);

let hobbies = ["rally", "beer", "girls"];

// Old Schhol
// const user = {
//     name: "Alex",
//     pro: "no one",
//     age: 36,
//     car: car,
//     hobbies: hobbies,
// };

// Modern ES6
const user = {
    name: "Alex",
    pro: "no one",
    age: 36,
    car,
    hobbies,
};

// console.log(user.hobbies[1]);
// user.hobbies[1] = "vodka";
// console.log(user.hobbies[1]);

// console.log(user.car.dealership.city);
// user.car.dealership.city = "Kyiv";

console.log(user.pizza); // undefined
// console.log(user);
