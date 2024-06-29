//Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

async function timing(url){
    let display = setInterval(() => {
        const response = fetch(url)
        const data = response.json
        // console.log(data)
        console.log(2)
    }, 2000)

    setTimeout(() => {
        clearInterval(display)
        console.log("Cleared the interval")
    }, 5000)
}
timing()