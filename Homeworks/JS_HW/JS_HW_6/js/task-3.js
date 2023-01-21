//----------------------------------------------ES5
// function Storage(arr) {
//     items: []
//     this.items = arr
// }
// Storage.prototype.getItems = function () {
//     return this.items
// }
// Storage.prototype.addItem = function (droid) {
//     this.items.push(droid)
// }
// Storage.prototype.removeItem = function (droid) {
//     return this.items = this.items.filter((item)=>item!==droid)
// }
// ----------------------------------------------ES6
class Storage {
    items = []
    constructor(arr) {
        this.items = arr
    }
    getItems() {
        return this.items
    }
    addItem(droid) {
        this.items.push(droid)
    }
    removeItem(droid) {
        return this.items = this.items.filter((item) => item !== droid)
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


  // Это пасхалка из Космических Рэйнджеров? =))))))))

