const calculateEngravingPrice = (message, pricePerWord) => {
   const newArr = message.toString().split(' ');
   let priceCounter = 0;
   for (const item of newArr) {
        priceCounter += pricePerWord;
   }
   return priceCounter;
}

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); 