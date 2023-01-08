let dog = {
    age: 4,
    name: "Snooppy",
    color: "black",
};

let cat = {
    age: 2,
    name: "Tom",
    color: "white",
};

// Common Way =================================
// console.log(dog.name);
// console.log(cat.name);

// Dynamic Keys ==============================
// dog["name"];
// cat["name"];

// console.log(dog["name"]);
// console.log(cat["name"]);

// Dymamicly  add pop and value ===================

// let state = ["Usa", "China", "Russia", "India", "Poland", "Japan"];
// let vakcines = ["Pfizer", "Coronovac", "Sputnic", "AstraZeneca", "", ""];

// let bank = {
//     Usa: Pfizer,
//     China: Coronovac,
//     Russia: Sputnic,
//     India: AstraZeneca
// }

// let bank = {};

// for (let i = 0; i < state.length; i += 1) {
// bank[state[i]] = vakcines[i];

// console.log(state[i]);
// console.log(vakcines[i]);
// }

// console.log(bank.China);
// console.log(bank.India);
// console.log(bank);

// ==============================

// let keyName = prompt("Enter prop name");
// let value = prompt("Enter prop value");

// let data = {};

// data[keyName] = value;

// console.log(data);
