import users from "./users.js"

const getNamesSortedByFriendsCount = users => {
    const resArr = users.sort(( a, b ) => a.friends.length - b.friends.length)
    return resArr
}

console.log(getNamesSortedByFriendsCount(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
