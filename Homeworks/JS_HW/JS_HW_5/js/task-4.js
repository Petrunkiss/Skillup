import users from "./users.js"

const getInactiveUsers = users => {
    const newArr = users.filter(({isActive})=>!isActive)
    return newArr
  };
  
  console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]