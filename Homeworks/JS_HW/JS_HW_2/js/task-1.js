const logItems = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        console.log(`Element number: ${i + 1}, value: ${arr[i]}`);
    }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);