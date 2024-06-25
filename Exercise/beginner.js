// function practice(){
//     setTimeout(() => {
//         console.log("Hello, World!")
//     },2000)
// }
// practice();

// function execution(callback){
//     setTimeout(() => {
//         callback();
//     }, 3000)
// }
// function callback(){
//     console.log("What is it all about!")
// }
// execution(callback)

// function usingSetInterval(){
//     setInterval(() => {
//         console.log("Tick")
//     }, 1000)
// }
// usingSetInterval()


function chaining(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("My program is running!")
            resolve()
        })
    })
}
chaining()
.then(data => console.log("The data is as follows " + data))
.then(() => console.log("then the second promise"))
.catch(err => console.log("The error message"))