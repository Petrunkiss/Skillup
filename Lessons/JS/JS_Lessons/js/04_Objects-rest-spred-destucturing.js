// Rest / Spresd
// Destructuring

// ... = ...

// ===========================
// Spred operator

// let citiesOfUkraine = ["Kyiv", "Odessa", "Lviv", "Donetsk"];
// let citiesOfEurope = ["London", "Paris", "Milan", "Berlin"];

// const cities = citiesOfEurope.concat(citiesOfUkraine);
// console.log(cities);

// const cities = ["Lisabion", ...citiesOfEurope, "Barcelona"];
// const cities = [...citiesOfEurope, ...citiesOfUkraine];
// console.log(cities === citiesOfEurope);
// console.log(cities);

// const alex = {
//     name: "Alex",
//     pro: "no one",
//     age: 36,
//     status: "Online",
// };

// Spred for objects
// const valeria = {
//     ...alex,
//     name: "Valeria",
//     age: 18,
//     hobbies: ["a", "b", "c"],
// };

// console.log(valeria);
//===========================
// Rest
let citiesOfUkraine = ["Kyiv", "Odessa", "Lviv", "Donetsk"];

// const [AA, BH, ...PIZZA] = citiesOfUkraine;
// const [AA, BH, ...rest] = citiesOfUkraine;
// console.log(AA);
// console.log(BH);

// console.log(PIZZA);
// console.log(rest);

// const [, , LV] = citiesOfUkraine;
// console.log(LV);

// let a = 10;
// let b = 20;
// [a, b] = [20, 10];

// console.log(a);
// console.log(b);

// =====================================

// ===========================
// Object Destructuring

// let car = {
//     title: "Porshe",
//     model: 911,
//     tyres: ["Michelin", "GoodYear", "Tokohama"],
//     milage: 50,
//     dealership: {
//         city: "Zap",
//         code: 12345,
//         street: "Vydohradna",
//     },
// };

// console.log(car.dealership.street);

// const { street } = car.dealership;
// const { city } = car.dealership;

// console.log(street);
// console.log(city);

// ========================================
// Naming Desructuring
// let street = "Peremohy";
// const { street: vulytsa } = car.dealership;

// console.log(street);
// console.log(vulytsa);

// console.log(car);

// ========================================

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
const user = {
    name: "Alex",
    pro: "no one",
    age: 36,
    car,
};

// console.log(user.car.dealership.street);

const dealership = {
    city: "Kyiv",
    code: 12345,
    street: "Peremohy",
};

// const { dealership } = user.car;
// console.log(dealership.street);

// const { dealership: dealZP } = user.car;
// console.log(dealZP.street);

const {
    dealership: { street },
} = user.car;
console.log(street);
