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


// async function asynchronousTest() {
//     const promise1 = new Promise((resolve, reject) => {
//         console.log("The first promise");
//         resolve()
//     });

//     const promise2 = new Promise((resolve, reject) => {
//         console.log("The second promise");
//         resolve();
//     });

//     const promise3 = new Promise((resolve, reject) => {
//         console.log("The third promise");
//         resolve();
//     });
//     await Promise.all([promise1, promise2, promise3]);

//     console.log("All promises resolved");
// }

// asynchronousTest();

// Write a JavaScript function that fetches data from an API and retries the request a specified number of times 
//if it fails.

// async function fetching(url, num){
//     try{
//         const response = await fetch(url)
//      if (response.status !== 200){
//         let value = num;
//         if(value > 0){
//             fetch(url, value)
//             value --;
//         }
//     }
//     const data = await response.json()
//     return data
//  }
//     catch(error){
//         console.log("Error occured")
//     }
// }

// fetching( 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver', 3)


//Fetch the countries longitude and latitude
async function forecast(countryDetails, weatherDetails){
    //Use the fetch API to get the weather details from https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.
   const countryDets = await fetch(countryDetails) 
   const weatherDets = await fetch(weatherDetails)
}
forecast('https://restcountries.com/v3.1/name/Rwanda','https://api.open-meteo.com/v1/forecast')

async function forecast(countryName){
    try{
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    if(!response.ok){
        throw new Error("Aubin is dumb!")
    }
    const data = await response.json()
    console.log(data[0])
    const latitude = data[0]["latlng"][0]
    console.log(`The latitude is ${latitude}`)
    const longitude = data[0]["latlng"][1]
    console.log(`The longitude is ${longitude}`)

    const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    const output = await weather.json()
    const capital = data[0]["capital"]
    console.log(capital)
    console.log(`The temperature is ${output.current_weather["temperature"]}`)

    }
    catch(err){
        console.log(err)
    }
}
forecast("Rwanda")


async function forecast(countryName){
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    if(!response.ok){
        throw new Error("Aubin is dumb!")
    }
    const data = await response.json()
    return data[0]
}
forecast("Rwanda").then((info) => {
    console.log(`The latitude is ${info["latlng"][0]}`)
    console.log(`The latitude is ${info["latlng"][1]}`)
    console.log(`The capital city is ${info["capital"]}`)
    const weather = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${info["latlng"][0]}&longitude=${info["latlng"][1]}&current_weather=true`)
    const output = JSON.parse(weather)
    console.log(`The temperature is ${output.current_weather["temperature"]}`)
})