async function fetchData(url, number){
    try{
        const response = await fetch(url);
        let value = number
        if(response.status !== 200 && value > 0){
            value--;
            fetch(url, value)
        }
        const data = await response.json()
        console.log(data)
        return data;

    }
    catch{
        throw new Error("No data retrieved")
    }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1", 4)
// console.log(promise)