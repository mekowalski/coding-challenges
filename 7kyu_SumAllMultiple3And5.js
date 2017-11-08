function findSum(n) {
  var sum = 0;

  for(i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum
}

findSum(6); //3+5+6=14
// findSum(5);
// findSum(10);

// L2: define sum = beginning point of 0 (because nothing is added yet)
// L5: for each number divisible by 3 or 5
// L5: want to look for numbers divisible by 3 or 5, so number % 3 or 5 = 0
// L6: then sum += number, if number is % by 3 or 5 then add those numbers together, ie: 3+5
// L6: 0 + number, say 10, 0 + 10 = 10
// L9: return sum
