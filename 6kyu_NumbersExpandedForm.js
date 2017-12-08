function expandedForm(num) {
  let numberArray = num.toString().split('').reverse();
  let expandedForm = ''

  for (let i = 0; i < numberArray.length; i++) {
    let currentNum = numberArray[i]

    if (currentNum != 0)
      expandedForm += `${currentNum * Math.pow(10, i)} + `
  }
  expandedForm = expandedForm.split(' ').reverse().join(' ')
  return expandedForm.replace(' + ','')
}
