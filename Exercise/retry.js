// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

async function fetchData(url, number){
    try{
    const response = await fetch(url);
    console.log(response.status)
    let value = number
    if(response.status !== 200 && value > 0){
            value--;
            fetchData(url, value)
    }
    const data = response.json();
    console.log(data)
    return data
}
catch{
    throw new Error("Error occured")
}
}

var promise = fetchData("test.json", 3)
console.log(promise)
//  .then(data => console.log(data))
//  .catch((err) => {
//     console.log(err.message)
    
// })