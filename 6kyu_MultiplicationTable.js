const multiplicationTable = function(size) {
  const array = []

  for (let i = 1; i <= size; i++) {
    const anotherArray = []
    for (let j = 1; j <= size; j++) {
      anotherArray.push(i * j)
    }
    array.push(anotherArray)
  }
  return array
}
