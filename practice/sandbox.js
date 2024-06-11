//make a request object
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if(request.readyState === 4){
        console.log(request.responseText)
    }
})
//argument: type of request you want to make, endpoint for your data that you want to request
request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
request.send()