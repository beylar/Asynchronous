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

