function findOutlier(integers){
  var even = []
  var odd = []

  for(i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      even.push(integers[i])
    }
    else {odd.push(integers[i])}
  }
  if (even.length == 1) {
    return even[0]
  }
  else {return odd[0]}
}

// Thinking beforehand
// should integers be the array?
// maybe make integers an array
// even N % 2 == 0
// odd N % 2 !== 0

// L2-3: arrays for odd and even element to be separated
// L5: loop through the initial integers array to (this is a separation part)
// L6: if number is divisible by 2
// L7: then push into the even array
// L9: else the array has numbers not divisible by 2 then push those elements into odd array
// L11-14: both even/odd arrays will either have 1 or many elements
// L11-14: i want to return the element from the array that only has the outlier
// L11-14: therefore if the array length is equal to 1 then return that element of that array
