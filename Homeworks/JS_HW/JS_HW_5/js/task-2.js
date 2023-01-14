import users from "./users.js"

const getUsersWithEyeColor = (users, color) => {
    const newArr = users.filter(({eyeColor})=> eyeColor === color)
    return newArr
  }
  
  console.log(getUsersWithEyeColor(users, 'blue')) // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]