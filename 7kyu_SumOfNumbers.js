function GetSum(a, b) {
    var array = [a, b]
    var sortedArray = array.sort(function (a, b) {return a - b})
    var a = Math.min.apply(Math, sortedArray)
    var b = Math.max.apply(Math, sortedArray)
    var total = 0

    if (a === b) {
      return a
      }
    else
      for(i = a; i <= b; i++) {
        total += i
    }
    return total
}

// Thinking beforehand
// also return (a, d), a+b+c+d
// this part is for returning ^^^

// L2: want to sort the min and max of array
// L3: learned that sort is unstable and will return back sorted array based on Unicode
// L3: ie [1, 20, 10, 2].sort returns [1, 10, 2, 20]
// L4-5: create variables for a & b with value applied
// L6: total begins at 0 because that is the beginning value before adding the numbers to it
// L8-10: if the a === b then return a or|| b
// L11-14: else return the sum of a+b
// L12-14: looping through each number and adding it to TOTAL to calculate all the number within a & b
// L15: return that total after calculation
