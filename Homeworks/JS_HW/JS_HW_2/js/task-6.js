
let total = 0;

const numbers = [];

toStart:
for (;total === 0;) {
    let input = prompt('Enter number');
    
    if (input === null) 
        break

    if (!Number(input)) {
        alert('enter numbers')    
        continue toStart;
    }
    numbers.push(input);
}

if (numbers.length) {
    for (const item of numbers) {
        total += Number(item);
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}
else {
    console.log(`Let's try again`);
}






