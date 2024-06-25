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


// function chaining(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//             return "My program is running!"
//         })
//     })
// }
// chaining()
// .then(data => console.log("The data is as follows " + data))
// .then(() => console.log("then the second promise"))
// .catch(err => console.log("The error message"))


async function asynchronousTest() {
    const promise1 = new Promise((resolve, reject) => {
        console.log("The first promise");
        resolve()
    });

    const promise2 = new Promise((resolve, reject) => {
        console.log("The second promise");
        resolve();
    });

    const promise3 = new Promise((resolve, reject) => {
        console.log("The third promise");
        resolve();
    });
    await Promise.all([promise1, promise2, promise3]);

    console.log("All promises resolved");
}

asynchronousTest();
