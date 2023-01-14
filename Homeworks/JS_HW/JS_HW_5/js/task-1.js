import users from "./users.js"


const getUserNames = users => {
    const resArr = []
    users.forEach(({name}) => {
        resArr.push(name)
    })
    return resArr
}

console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

