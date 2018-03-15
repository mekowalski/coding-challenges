function expandedForm(num) {
  let numberArray = num.toString().split('')
  let expandedForm = ''

  for (let i = numberArray.length - 1, pow = i; i >= 0; i--) {
    let currentNum = numberArray[i]

    if (currentNum !== '.')
      pow--

    if (currentNum !== '0' && parseInt(currentNum))
      expandedForm += `${currentNum}/${Math.pow(10, pow)} + `
  }
  expandedForm = expandedForm.split(' ').reverse().join(' ')
  return expandedForm.replace(' + ','').replace(/\/\d+/,'')
}

//this is a 3rd attempt, i forgot to copy over the 2nd attempt with updates
//this code only passes sample tests not the random attempted tests, not passing yet
