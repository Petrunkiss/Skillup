import users from "./users.js"

const getUsersWithGender = (users, gender) => {
    const newArr = []
    users.forEach(item => {
        if (item.gender === gender)
            newArr.push(item.name)
    })
    return newArr
}

console.log(getUsersWithGender(users, 'male'))
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]