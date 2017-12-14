function anagrams(word, words) {
  const sortString = (string) => string.split("").sort().join("")

  return words.filter(elem => sortString(word) === sortString(elem))
}

// L2: create variable to hold the newly modified string after splitting, sorting and joining
// L4: return a filter of the words after they have been compared with the single word and element of
// L4: the word
