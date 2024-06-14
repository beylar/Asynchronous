//asyn and await

const getTodos = async () => {
    const response = await fetch('todos/belicias.json');
    if(response.status !== 200){
        throw new Error("can not find the file")
    }
    const data = await response.json()
    return data
}

// const test = getTodos() : returns a promise as async is a promise
getTodos()
    .then(data => console.log("resolved", data))
    .catch(err => console.log('rejected', err))





//fetch api
//?? Understanding how callback and promises work with requests
//fetch returns an error or catch when there is a network issue alone
// fetch('todos/belicia.json').then((response)=> {
//     console.log("resolved", response)
//     return response.json() //json object
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('Error occured', err)
// })