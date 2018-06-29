//@param {number} x
//@return {boolean}
//Leetcode

//First attempt
var isPalindrome = function(x) {
  const stringX = x.toString().split('')
  return x == stringX.reverse().join('')
};

//Second attempt without reverse
var isPalindrome = function(x) {
  const arrayX = x.toString().split('')
  const newArray = []

  for (let i = arrayX.length - 1; i >= 0; i--) {
    newArray.push(arrayX[i])
  }

  const newString = newArray.join('')
  return newString == x
};

// L7: create a variable that will convert parameter 'x' into a string
// L8: return parameter 'x' that is eqaulity-equal to stringX that is reversed and joined

//Second attempt made without using a helper method '.reverse'
// L13: create a variable that will convert parameter 'x' into a string
// L14: create a new array to use for holding items once arrayX has gone through the for loop
// L16: i is assigned the numerical value of the length of arrayX -1, starting from the end of arrayX
// L17: the items looped through from the end of arrayX will then be held in the variable newArray
// L20: newString is assigned to newArray that is joined
// L21: return the value of newString that is the eqaulity-equal of parameter 'x'
