//creating a callback function to make my codes reusable
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)
        if(request.readyState === 4 && request.status === 200){
            //the transfer of data between the request to the server, they come in a JSON string form
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } 
        else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    })
// request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
// request.open('GET','todos.json')
request.open('GET',resource)
request.send()
}

// console.log(1)
// console.log(2)

// getTodos((err, data) => {
//     console.log('callback fired')
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// });

// console.log(3)
// console.log(4)

//make a request object
//argument: type of request you want to make, endpoint for your data that you want to request

//callback hell
getTodos('todos/belicia.json', (err, data) => {
    console.log('callback fired')
    console.log(data)
    getTodos('todos/messi.json', (err, data) => {
        console.log(data)
        getTodos('todos/messi.json', (err, data) => {
            console.log(data)
        })
    })
});