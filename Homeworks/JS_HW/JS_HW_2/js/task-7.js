const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    if (login.length < 4 || login.length > 16)
        return false

    return true
};

const isLoginUnique = function (allLogins, login) {
    for (const item of allLogins) {
        if (item === login)
            return false
    }
    return true
};

const addLogin = function (allLogins, login) {

    if (!isLoginValid(login))
        return console.log('Помилка! Логін повинен бути від 4 до 16 символів');

    if (!isLoginUnique(allLogins, login))
        return console.log('Такий логін уже використовується!');

    allLogins.push(login)
    return console.log('Логін успішно доданий!');
};


/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
