const checkForSpam = (message) => {
    let newStr = message.toLowerCase()

    if ((newStr.includes('spam')) || (newStr.includes('sale')))
        return true

    return false
}

console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true