//--------------------------------------------------ES5
// function Car({ maxSpeed, price }) {
//     /*
//      * Конструктор отримує об'єкт налаштувань.
//      *
//      * Додай властивості майбутнього екземпляра класу:
//      *  speed - поточна швидкість, початкова 0
//      *  price - ціна автомобіля
//      *  maxSpeed - максимальна швидкість
//      *  isOn - заведений автомобіль, значення true або false. Спочатку false
//      *  distance - загальний кілометраж, спочатку 0
//      */   
//     this.maxSpeed = maxSpeed
//     this.price = price
//     this.speed = 0
//     this.isOn = false
//     this.distance = 0
// }
// /*
//  * Додай статичний метод `getSpecs(car)`,
//  * який приймає об'єкт-машину як параметр і виводить
//  * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//  */
// Car.getSpecs = function getSpecs(car) {
//     console.log(`
//         maxSpeed: ${car.maxSpeed},      
//         speed: ${car.speed},
//         isOn: ${car.isOn},
//         distance: ${car.distance},
//         price: ${car.price}`)
// }
// /*
// * Додай геттер і сеттер для властивості price,
// * який буде працювати з властивістю ціни автомобіля.
// */
// Car.prototype.getCarPrice = function () {
//     return this.price
// }
// Car.prototype.setCarPrice = function (amount) {
//     this.price = amount
// }
// /*
//  * Додай код для того, щоб завести автомобіль
//  * Записує у властивість isOn значення true
//  */
// Car.prototype.turnOn = function () {
//     return this.isOn = true
// }

// /*
//  * Додай код для того, щоб заглушити автомобіль
//  * Записує у властивість isOn значення false,
//  * і скидає поточну швидкість в 0
//  */
// Car.prototype.turnOff = function () {
//     return this.isOn = false, this.speed = 0
// }

// /*
//  * Додає до властивості speed отримане значення,
//  * за умови, що результуюча швидкість
//  * не більше, ніж значення властивості maxSpeed
//  */
// Car.prototype.accelerate = function (value) {
//     if (this.maxSpeed >= this.speed + value)
//         this.speed = this.speed + value
// }

// /*
//  * Забирає від властивості speed отримане значення,
//  * за умови, що результуюча швидкість не менше нуля
//  */
// Car.prototype.decelerate = function (value) {
//     if (this.speed >= value)
//         this.speed = this.speed - value
// }

// /*
//  * Додає в поле distance кілометраж (hours * speed),
//  * але тільки в тому випадку, якщо машина заведена!
//  */
// Car.prototype.drive = function (hours) {
//     if (this.isOn)
//         this.distance += this.speed * hours
// }


//--------------------------------------------------ES6

class Car {

    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs(car) {
        console.log(`
        maxSpeed: ${car.maxSpeed},
        speed: ${car.speed},
        isOn: ${car.isOn},
        distance: ${car.distance},
        price: ${car.price}`)
    }
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    constructor({ maxSpeed, price }) {
        this.maxSpeed = maxSpeed
        this.price = price
        this.speed = 0
        this.isOn = false
        this.distance = 0
    }

    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
    get carPrice() {
        return this.price
    }
    set carPrice(amount) {
        this.price = amount
    }
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        return this.isOn = true
    }

    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        return this.isOn = false, this.speed = 0
    }

    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
        if (this.maxSpeed >= this.speed + value)
            this.speed = this.speed + value
    }

    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
        if (this.speed >= value)
            this.speed = this.speed - value
    }

    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        if (this.isOn)
            this.distance += this.speed * hours
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
// через Getter - 
// console.log(mustang.carPrice); // 2000
mustang.price = 4000;
// через Setter -  
//mustang.carPrice = 4000; // 2000
console.log(mustang.price); // 4000

//----------------------------------------------------------

// П.С. - я так понял, что нельзя задать Setter и Getter
// одинаковое имя с полем(хотя оно и логично), поэтому
// добавил закоменченный вариант из вызова.
