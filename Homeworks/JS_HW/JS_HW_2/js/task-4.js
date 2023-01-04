const formatString = (str) => {
    
    if(str.length > 40){
        let newStr = str.slice(0, 40).padEnd(43, '.') // или просто сканкатенировать + '...'
        return newStr
    }
    
    return str
  }
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'))
  console.log(formatString('Curabitur ligula sapien.'))
  console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'))

