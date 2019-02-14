function shout(string) {
  return string.toUpperCase()
}
function logShout(sayHiToGrandma) {
  console.log('HELLO')
  return `YES INDEED`
}
function whisper(string) {
  return string.toLowerCase()
}
function logWhisper(sayHiToGrandma) {
  console.log('hello')
  return `I can't hear you!`
}
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return("I can't hear you!")
} if (string === string.toUpperCase()) { 
  return("YES INDEED!")
}
  console.log("I love you, Grandma.")
  return `I love you, too.`
} 
