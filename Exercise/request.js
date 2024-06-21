async function myFetch(url){
//    const response = await fetch(url);
//    const data = await response.json()
//    return data;

return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data)
        }
        else if(request.readyState === 4){
            reject("Data is not retrieved")
        }
    })
    request.open("GET", url)
    request.send()
})
}

myFetch('https://my-random-api.com/data')
.then(data => console.log(data))
.catch(error => console.log('Error:', error));