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

// L2: create variable that holds the 'num' array after converting it as a string, splitting it
// L2: into individual characters and reversing the order of the 'num' array
// L3: create variable to hold the return value in string format
// L5: begin for loop and later use 'i' as an abstract placeholder in Math.pow
// L6: create variable to hold current number that is the actual value of 'numberArray[i]'
// L8: the kata instructions don't care about the return statement having inclusion of zeros in
// L8: the testing numbers, therefore if the current number isn't 0, move to next line of code
// L9: add onto the empty string with the actual value of the calculations ahead including '+'
// L9: current number multiplied by 10 raised to the i power, i is exactly equal to the numerical
// L9: value in the the beginning for loop of 'let i = 0', after each loop, i will increment
// L9: numerically and will be used as the raising number for 10 in Math.pow
// L9: EXAMPLE: 453, 4 is index 0, Math.pow(10, 0) is equal to 1, 4 * 1 = 4
// L9: (continue), 5 is index 1, Math.pow(10, 1) is equal to 10, 5 * 10 = 50
// L9: (continue), 3 is index 2, Math.pow(10, 2) is equal to 100, 3 * 100 = 300
// L11: the expanded form after the loop will be equal to the split, reversed and joined format
// L12: return the newly modified & saved expanded form and replace just the beginning '+' with
// L12: an empty string
