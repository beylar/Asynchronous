//Create an `async` function that logs the time taken to complete multiple asynchronous tasks using `console.time` 
//and `console.timeEnd

async function timing(url){
    try{
        console.time(url)
        const response = await fetch(url)
        const data = await response.json()
        console.timeEnd(url)
    }
    catch(error){
        console.log(`The error is ${error}`)
    }
}
timing("https://jsonplaceholder.typicode.com/posts")

//Implement an asynchronous function that processes a large dataset in smaller chunks using `setTimeout` 
//to avoid blocking the main thread.

async function avoidBlocking(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(`Error occured ${error}`)
    }
}
setTimeout(() => {
        avoidBlocking("https://jsonplaceholder.typicode.com/posts")
    }, 2000)
