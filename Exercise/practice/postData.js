//fetch
// async function postingData(userName, email, password){
//     try{
//         const headerObject = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             }, 
//             body: JSON.stringify({userName, email, password})
//         }
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", headerObject)
//         if(response.ok){
//             const data = await response.json()
//             console.log(data)
//         }
//         else if(!response.ok){
//             throw new Error("Network error")
//         }
//     }
//     catch(error){
//         console.log(`Error occured! ${error}`)
//     }

// }
// postingData("AubinRwanda", "you@gmail.com", "abc7777")


//XHR

async function postingData(userName, email, password) {
    try{
        const response = new XMLHttpRequest();
        const url = "https://jsonplaceholder.typicode.com/posts"
        response.open('POST', url, true)
        response.setRequestHeader('Content-Type', 'application/json')

        response.onreadystatechange = () => {
            if(response.readyState === 4){
                if(response.status === 200 || response.status < 300){
                const xhr = JSON.parse(response.responseText)
                console.log(xhr)
                }
            }
            else if(response.readyState === 4){
                throw new Error("Error again!")
            }
        }
        const data = JSON.stringify({userName, email, password})
        response.send(data)
    }
    catch(error){
        console.log(`Error occured! ${error}`)
    }

}
postingData("AubinRwanda", "you@gmail.com", "abc7777")