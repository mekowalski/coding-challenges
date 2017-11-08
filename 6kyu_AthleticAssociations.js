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
