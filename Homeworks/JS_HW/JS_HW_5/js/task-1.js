import users from "./users.js"


const getUserNames = users => {
// -------------------------------------------------------------------- forEach()
    // const resArr = []
    // users.forEach(({name}) => {
    //     resArr.push(name)
    // })
    // return resArr

// -------------------------------------------------------------------- map()
    const userNames = users.map(({ name }) => name)
    return userNames


}

console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

