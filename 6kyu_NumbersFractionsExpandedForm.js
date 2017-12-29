function expandedForm(num) {
// copied code from part 1
  let numberArray = num.toString().split('').reverse();
  let expandedForm = ''

  for (let i = 0; i < numberArray.length; i++) {
    let currentNum = numberArray[i]
    console.log(currentNum)
    if (currentNum != 0)
      expandedForm += `${currentNum * Math.pow(10, i)} + `
  }
  expandedForm = expandedForm.split(' ').reverse().join(' ')
  return expandedForm.replace(' + ','')


// console.log(toString.call(num)) => prints the object type on screen
  let numberArray = num.toString().split('')
  let decimal = numberArray.indexOf('.')
  let newNumberArray = numberArray.splice(`${decimal + 1}`, `${numberArray.length}`)

  let firstDigit = Math.floor(num)
  // need to expand all numbers before decimal and expand all numbers after decimal in fraction form
  // 3.75
  // 3
  // 36.75
  // 36
  // 30 + 6 + 7/100 + 5/10

  let expandedForm = ''

  for (let i = 0; i < newNumberArray.length; i++) {
    let currentNum = newNumberArray[i]

    if (currentNum != 0)
     expandedForm += `${currentNum}/` + `${10 * Math.pow(10, i)} + `
  }
  let final = (`${firstDigit} + ` + `${expandedForm}`).split(' ').join(' ')
  return final.substring(0, final.length - 3)

// finalExpandedForm = expandedForm.split(' ').reverse().join(' ')
}
