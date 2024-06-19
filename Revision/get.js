//Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
function fetching(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then (response => {
            if(!response.ok){
                throw new Error(`Error occured: ${response.status}`)
            }
          return response.json()
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
        })
    }
fetching('https://example.com/data')
.then(data => {
    console.log(`The response is: ${data}`)
})
.catch(err => {
    console.log(`The error occured: ${err}`)
})