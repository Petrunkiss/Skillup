import users from "./users.js"

const getNamesSortedByFriendsCount = users => {
    const sortedByFriendsArr = users
    
    .sort(( a, b ) => a.friends.length - b.friends.length)
    .map(({name})=>name)

    return sortedByFriendsArr
}

console.log(getNamesSortedByFriendsCount(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
