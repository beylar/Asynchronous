// async function fetchData(url){
//     let controller = new AbortController();
//     let signal = controller.signal;

const { clear } = require("console");

//     let counter = setTimeout(() => {
//         controller.abort()
//     }, 100)
//     try{
//         const response = await fetch(url, {signal})
//         clearTimeout(counter)
//         console.log(response)
//     }
//     catch(error){
//         if(error.name === "AbortError"){
//             console.log("Timed out")
//         }
//         else{
//             console.log("Error occured")
//         }

//     }
// }

// fetchData("https://jsonplaceholder.typicode.com/todos")
// .then((message) => {
//     console.log(`The message is ${message}`)
// })
// .catch((err) => {
//     console.log(`Error occured ${err}`)
// })


function fetchData(url) {
    let controller = new AbortController();
    let { signal } = controller;

    let counter = setTimeout(() => {
        controller.abort()
    }, 100)

    fetch(url, { signal })
        .then((response) => {
            clearTimeout(counter);
            console.log(response)
        })
        .catch((err) => {
            if (err.name === "AbortError") {
                console.log("Timed out")
            }
            else {
                console.log("Error occured")
            }
        })
}

fetchData("https://jsonplaceholder.typicode.com/todos")