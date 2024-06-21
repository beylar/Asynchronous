// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
function displayNumber() {
let timer = setInterval(() => {
    console.log("yes")
}, 2000)
setTimeout(() => {
    clearInterval(timer)
}, 5000)
}
displayNumber()