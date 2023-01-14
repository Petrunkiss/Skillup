import users from "./users.js"

const getUserWithEmail = (users, email) => {
    const foundUser = users.find(({email: userEmail})=>userEmail === email)
    return foundUser
  }
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}