const findLongestWord = (str) => {

    const newArr = str.trim().split(' ');
    let theLongestWord = ''

    for (const item of newArr) {
        if (item.length > theLongestWord.length) {
            theLongestWord = item
        }

    }
    return theLongestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('Google do a roll')) 
console.log(findLongestWord('May the force be with you'))