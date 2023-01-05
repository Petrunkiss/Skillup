
const findBestEmployee = (employees) => {
    let counter = 0
    let mostProductiveEmp = ''
    for (const key in employees) {
        if (counter < employees[key]) {
            counter = employees[key]
            mostProductiveEmp = key
        }
    }
    return `The best result was done by ${mostProductiveEmp} - ${Number(counter)} tasks`
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
) // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
) // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
) // lux

