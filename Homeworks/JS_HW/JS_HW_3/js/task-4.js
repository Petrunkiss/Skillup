const countTotalSalary = function (employees) {
    let totalSalary = 0

    for (const key in employees) 
        totalSalary += Number(employees[key])    
    
    return `The total emloyees' salary is - ${totalSalary}`
  }

console.log(countTotalSalary({})) // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
) // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
) // 400