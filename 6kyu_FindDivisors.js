function divisors(integer) {
  const divisors = []
  //create an array to hold the divisors

  for (let i = 2; i <= integer/2; i++) {
    //start at 2 because every # is divisible by 1 and itself
    if (integer % i === 0) {
      divisors.push(i)
      //every # that is divisible up to the main number will be pushed into the divisors array
    }
  }
  return divisors.length ? divisors : integer + ' is prime'
  //if divisors length is true then return array of divisors
  //else return # is prime
};
