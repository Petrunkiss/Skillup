import users from "./users.js"

const getSortedUniqueSkills = users => {

const skillsArr = []

users.forEach(({skills}) => {
    skills.forEach(item => {
        skillsArr.push(item)
    })
})

skillsArr.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
})

const uniqueSkillArr = skillsArr.filter((item, idx, arr) => arr.indexOf(item) === idx )

return uniqueSkillArr
}

console.log(getSortedUniqueSkills(users));
//   // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 
//   'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 
//   'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]