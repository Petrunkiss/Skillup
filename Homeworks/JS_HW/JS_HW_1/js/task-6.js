let total = 0;
let input = 0;

while (input !== null) {
    total += Number(input);  // можно добавить if и break; чтобы не складывать 0 в первой итерации, но так лаконичнее код =)
    input = prompt('Enter numbers');
}

Number.isNaN(total) ? alert('Enter numbers') : alert(`Total summ = ${total}`);
