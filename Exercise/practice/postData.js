//fetch
async function postingData(userName, email, password){
    try{
        const headerObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({userName, email, password})
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", headerObject)
        if(response.ok){
            const data = await response.json()
            console.log(data)
        }
        else if(!response.ok){
            throw new Error("Network error")
        }
    }
    catch(error){
        console.log(`Error occured! ${error}`)
    }

}
postingData("AubinRwanda", "you@gmail.com", "abc7777")


//XHR