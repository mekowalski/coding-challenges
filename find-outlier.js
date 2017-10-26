function findOutlier(integers){
  //should integers be the array?
  //maybe make integers an array
  //even N % 2 == 0
  //odd N % 2 !== 0

  //arrays for odd and even element to be separated
  var even = []
  var odd = []

  //loop through the initial integers array to (this is a separation part)
  for(i = 0; i < integers.length; i++) {
    //if number is divisible by 2
    if (integers[i] % 2 == 0) {
      //then push into the even array
      even.push(integers[i])
    }
    //else the array has numbers not divisible by 2 then push  those elements into odd array
    else {odd.push(integers[i])}
  }
  //both even/odd arrays will either have 1 or many elements
  //i want to return the element from the array that only has the outlier
  //therefore if the array length is equal to 1 then return that element of that array
  if (even.length == 1) {
    return even[0]
  }
  else {return odd[0]}
}
