//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function invoking(callback){
    setTimeout(callback, 2000)
}
function display(){
    console.log("yes, it is done")
}

invoking(display)

//Write a JavaScript program that converts a callback-based function to a Promise-based function.