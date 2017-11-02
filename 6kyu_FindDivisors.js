function divisors(integer) {
  const divisors = []

  for (let i = 2; i <= integer/2; i++) {
    if (integer % i === 0) {
      divisors.push(i)
    }
  }
  return divisors.length ? divisors : integer + ' is prime'
}

// L2: create an array to hold the divisors
// L4: start at 2 because every # is divisible by 1 and itself
// L6: every # that is divisible up to the tested integer will be pushed into the divisors array
// L9: if divisors length is true then return array of divisors
// L9: else return # is prime
