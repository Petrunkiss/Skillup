import users from "./users.js"

const getUsersWithGender = (users, gender) => {

// -------------------------------------------------------------------- forEach()
    // const usersByGenderArr = []
    // users.forEach(item => {
    //     if (item.gender === gender)
    //         newArr.push(item.name)
    // })
    // return newArr

// --------------------------------------------------------------------filter().map()
    const usersByGenderArr = users.filter(({gender: sex})=> sex === gender)
    .map(({name})=> name)

    return usersByGenderArr
}

console.log(getUsersWithGender(users, 'male'))
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]