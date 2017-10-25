function GetSum(a, b) {
//------------------------
//also return (a, d), a+b+c+d
//this part is for returning ^^^
//want to sort the min and max of array
    var array = [a, b]
    //learned that sort is unstable and will return back sorted array based on Unicode
    //ie [1, 20, 10, 2].sort returns [1, 10, 2, 20]
    var sortedArray = array.sort(function (a, b) {return a - b})
    //create variables for a & b with value applied
    var a = Math.min.apply(Math, sortedArray)
    var b = Math.max.apply(Math, sortedArray)
    //total begins at 0 because that is the beginning value before adding the numbers to it
    var total = 0

    //if the a === b then return a or|| b
    //else return the sum of a+b

    //this part works, maybe post blog about how i solved this, step by step
    if (a === b) {
      return a
      }
    else
      for(i = a; i <= b; i++) {
      //looping through each number and adding it to TOTAL to calculate all the number within a & b
        total += i
    }
    //return that total after calculation
    return total
}
