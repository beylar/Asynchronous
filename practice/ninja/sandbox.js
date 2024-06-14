//creating a callback function to make my codes reusable
const getTodos = (resource /*, call back*/) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)
            if(request.readyState === 4 && request.status === 200){
                //the transfer of data between the request to the server, they come in a JSON string form
                const data = JSON.parse(request.responseText)
                // callback(undefined, data);
                resolve(data)
            } 
            else if(request.readyState === 4){
                // callback('could not fetch data', undefined);
                reject("error getting data")
            }
        })
        
        request.open('GET',resource)
        request.send()
    })
// request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
// request.open('GET','todos.json')
}

getTodos('todos/belicia.json').then(data => {
    console.log("Program 1 resolved:", data)
    return getTodos('todos/maid.json')
}).then(data => {
    console.log("Program 2 resolved:", data)
    return getTodos('todos/messi.json')
}).then(data => {
    console.log("Program 3 resolved:", data)
}).catch(err => {
    console.log("Error occurred: ", err)
})

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
// getTodos('todos/belicia.json', (err, data) => {
//     console.log('callback fired')
//     console.log(data)
//     getTodos('todos/messi.json', (err, data) => {
//         console.log(data)
//         getTodos('todos/messi.json', (err, data) => {
//             console.log(data)
//         })
//     })
// });

//promises
// const getData = (() => {
//     return new Promise((resolve, reject) => {
//         // resolve("some data");
//         reject("some err")
//     })
// })
// getData().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

//Method 2: 
// getData().then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })