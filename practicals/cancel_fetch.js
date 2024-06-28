async function fetching (url){
        const controller = new AbortController()
        const {signal} = controller
        const counter = setTimeout(() => {
            controller.abort()
        }, 200)

        fetch(url, {signal})
        .then((response) => {
            clearTimeout(counter)
            console.log(response)
        })
    
       .catch((error) => {
        if(error.name === "AbortError"){
            console.log("timed out")
        }
        else{
            console.log("Network")
        }
    })
}
fetching("https://jsonplaceholder.typicode.com/posts")