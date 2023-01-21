//----------------------------------------------ES5
// function StringBuilder(str) {
//     value: ''
//     this.value = str

// }
// StringBuilder.prototype.getValue = () => {
//     return this.value
// }
// StringBuilder.prototype.append = function (str) {
//     this.value = this.value + str
// }
// StringBuilder.prototype.prepend = function (str) {
//     this.value = str + this.value
// }
// StringBuilder.prototype.pad = function (str) {
//     this.value = str + this.value + str
// }
// ----------------------------------------------ES6
class StringBuilder {
    _value = ''
    constructor(str) {
        this._value = str
    }

    // getValue(){
    //     return this._value
    // }

    get value() {
        return this._value
    }
    append(str) {
        //this._value = this._value.concat(str)
        this._value = this._value + str
    }
    prepend(str) {
        //this._value = str.concat(this._value)
        this._value = str + this._value
    }
    pad(str) {
        //this._value = str.concat(this._value) + str
        this._value = str + this._value + str
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
