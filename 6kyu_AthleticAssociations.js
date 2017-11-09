//THIS IS THE CORRECT AND FINAL SOLUTION I HAVE
function stat(strg) {
  if (!strg)
    return ''
  else
    return calculations(strg)
}

function calculations(strg){
  let array = strg.split(",")
  let eachIndividual = []

  for(let i = 0; i < array.length; i++) {
    eachIndividual.push(array[i].trim().split("|"))
  }


  //RANGE
  let rangeSeconds = 0
  let playerSeconds = []
  for (let i = 0; i < eachIndividual.length; i++) {
    let sumSeconds = 0;
    sumSeconds += (parseInt(eachIndividual[i][0] * 3600) + parseInt(eachIndividual[i][1] * 60) + parseInt(eachIndividual[i][2]))
    playerSeconds.push(sumSeconds)
  }

  rangeSeconds = Math.max(...playerSeconds) - Math.min(...playerSeconds)

  let rangeTime = secondsToTime(rangeSeconds)


  //AVERAGE
  let total = 0
  for (let i = 0; i < playerSeconds.length; i++) {
    total += playerSeconds[i]
  }

  let averageSeconds = Math.floor((total / playerSeconds.length))

  let averageTime = secondsToTime(averageSeconds)


  //MEDIAN
  let values = playerSeconds.sort((a,b) => a-b)
  let half = Math.floor(values.length / 2);
  let medianValue = 0

  if (values.length % 2 != 0)
    medianValue = values[half]
  else
    medianValue = (values[half - 1] + values[half]) / 2

  let medianTime = secondsToTime(medianValue)


  //FINAL STATEMENT
  let range =  `Range: ${rangeTime} `
  let average = `Average: ${averageTime} `
  let median = `Median: ${medianTime}`

  return  `${range}` + `${average}` + `${median}`
}

function secondsToTime(value) {
  let hours = Math.floor(value / 3600)
  let minutes = Math.floor(value % 3600 / 60)
  let seconds = Math.floor(value % 3600 % 60)

  if (hours < 10) {hours = "0" + hours}
  if (minutes < 10) {minutes = "0" + minutes}
  if (seconds < 10) {seconds = "0" + seconds}

  return `${hours}|${minutes}|${seconds}`
}

//Thinking prior to writing(also wishing i saved all my progress since this took so long)
//separate range, average and median into individual functions first then implement later
//thinking of how to write the ending statement, concatenate or interpolate?
//how do i remove the | and white space from the test array?
//before, i thought to calculate against each hour, minute and second
//BUT in doing so, it was actually incorrect, i thought the test were wrong but my thinking was wrong
//to get straight forward calculated times i would need a base to calculate therefore convert the
//time all into an individual of seconds, much easier to do the Math

// L2-7: conditional for the random tests, to weed out the empty strings & return '' since tests wants
// L3-4: return of ''
// L5-6: so, if the tested string is empty nothing, empty then return '' else return the called function
// L9: separate function to run the calculations against tested data/strings
// L10: create variable 'array' to remove ',' from the data
// L11: create variable 'eachIndividual' = to an empty [] to store the data that will soon be looped over
// L13-15: for loop for the tested data to remove whitespace from both sides of string & remove |
// L14: take the newly separated data and store in the 'eachIndividual' array for now
// L19: 'rangeSeconds' holds numerical value from data, starts at 0 because nothing is yet calculated
// L20: create variable 'playerSeconds' to store the seconds of each players time
// L22: variable sumSeconds will increment and store total of seconds after time conversions
// L23: converting each time into seconds and adding it altogether
// L24: take each new sets of seconds and store in 'playerSeconds' array
// L27: variable 'rangeSeconds' will now equate to the value of MAX seconds - MIN seconds (range calc)
// L29: variable 'rangeTime' to equate return value for the end statement
// L33: 'total' will increment and store the final value of all playerSeconds times
// L35: add all playerSeconds sets to what it totals until the playerSeconds length is reached
// L38: 'averageSeconds' now equates to value of total seconds / the playerSeconds length (average calc)
// L40: 'averageTime' is the return value for the end statement
// L44: variable 'values' of playerSeconds sorted
// L45: calculate what 'half' of values length will be
// L46: 'medianValue' holds the numerical value for the median of the data
// L49: if values length is odd then return the value in the middle
// L51: else return the value of (low middle + high middle) / 2
// L53: 'medianTime' is the return value for the end statement
// L57-59: each variable stores the calculated & converted times of their perspective value
// L61: returns the ending statement formatted to specific requirement of tests
// L65-67: converts seconds back to respective times(hours, minutes, seconds)
// L69-71: conditionals for if conversions return single digit values, tests formats with double digits
// L73: return each of those variables in formatted statement
