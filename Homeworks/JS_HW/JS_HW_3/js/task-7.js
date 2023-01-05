/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
}

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій
    transactions: [],

    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
        let idNumber = this.transactions.length
        const transactionNewObj = { id: idNumber, type: type, amount: amount }

        return transactionNewObj
    },

    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        this.balance += amount
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))

        return console.log(`додано ${amount} на ваш рахунок, ваш баланс: ${this.balance}`)
    },

    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        if (this.balance <= 0 || this.balance < amount)
            return console.log(`зняття ${amount} суми не можливо, недостатньо коштів, ваш баланс: ${this.balance}`)

        this.balance -= amount
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
        return console.log(`знято ${amount} з вашего рахунку, ваш баланс: ${this.balance}`)
    },

    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return `На вашем счету: ${this.balance} тугрика`
    },

    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        if (this.transactions[id] === undefined)
            return console.log(`Такой транзакции не существует`)

        return this.transactions[id]
    },

    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let totalCounter = 0
        for (const item of this.transactions) {
            if (item.type === type)
                totalCounter += item.amount
        }
        return totalCounter
    },
}

//======================================! console.log()и вписаны в ф-ии для наглядности !================================

console.log(account.deposit(50)) // Добавляем на счёт 50 с сообщением
console.log(account.deposit(100)) // Добавляем на счёт 100 с сообщением
console.log(account.deposit(1500)) // Добавляем на счёт 1500 с сообщением

console.log(account.withdraw(100)) // Снимаем со счёта 100 с сообщением
console.log(account.withdraw(200)) // Снимаем со счёта 200 с сообщением
console.log(account.withdraw(4000)) // Снимаем со счёта 4000 с сообщением 

console.log(account.getBalance()) // Выводим баланс

console.log(account.getTransactionDetails(0)) // Выводим обьект по номеру id
console.log(account.getTransactionDetails(1)) // Выводим обьект по номеру id
console.log(account.getTransactionDetails(2)) // Выводим обьект по номеру id
console.log(account.getTransactionDetails(3)) // Выводим обьект по номеру id
console.log(account.getTransactionDetails(4)) // Выводим обьект по номеру id
console.log(account.getTransactionDetails(10)) // Выводим обьект по несуществующему id

console.log(account.getTransactionTotal(Transaction.WITHDRAW)) // Выводим сумму снятий - 300
console.log(account.getTransactionTotal(Transaction.DEPOSIT)) // Выводим сумму добавлений - 1650







