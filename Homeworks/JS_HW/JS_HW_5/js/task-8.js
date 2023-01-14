import users from "./users.js"

const getUsersWithFriend = (users, friendName) => {
    const resArr = []
    users.forEach(item => {
        const isUser = item.friends.some((value) => value === friendName)
        if (isUser)
            resArr.push(item.name)
    })
    return resArr
}

console.log(getUsersWithFriend(users, 'Briana Decker')) // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')) // [ 'Elma Head', 'Sheree Anthony' ]