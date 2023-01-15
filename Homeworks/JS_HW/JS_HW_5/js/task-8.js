import users from "./users.js"

const getUsersWithFriend = (users, friendName) => {
// -------------------------------------------------------------------- forEach()
    // const hasFriendArr = []

    // users.forEach(item => {
    //     const isUser = item.friends.some((value) => value === friendName)
    //     if (isUser)
    //         hasFriendArr.push(item.name)
    // })
    // return hasFriendArr

// -------------------------------------------------------------------- filter(()=>{ вложенный find() }).map()
    // const hasFriendArr = users.filter(({friends})=>friends.find((item)=>item === friendName))
    // .map(({name})=>name)
    
    //  return hasFriendArr

// -------------------------------------------------------------------- reduce( ()=>{ проверка some() } )
    const hasFriendArr = users.reduce((acc, elem, idx, arr)=>{

        if(elem.friends.some((item)=>item === friendName))
        acc.push(elem.name)    

      return acc
    },[])

    return hasFriendArr
}



console.log(getUsersWithFriend(users, 'Briana Decker')) // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')) // [ 'Elma Head', 'Sheree Anthony' ]