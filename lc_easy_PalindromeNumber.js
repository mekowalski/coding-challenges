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
