//write an asynchronous function that fetches and if it delays for more than 5s then retry
async function delayRetry(url){
    try{
        const controller = new AbortController();
        const { signal } = controller
        const counter = setTimeout(() => {
            controller.abort()
        },0)
        fetch(url, {signal})
        if(response.ok){
            clearTimeout(counter)
            return response
        }
    }
    catch(error){
        if(error.name === "AbortError"){
            console.log(`signal issues ${error.message}`);
            throw new Error("Time out")  
        }
        // throw Error
    }

    try{
        const response = await fetch(url)
        if(response.ok){
        const data = await response.json()
        console.log(data)
        }
        else{
            console.log(`Network again ${response.status}`)
        }
    }
    catch(err){
        if(err.message === "Time out"){
            const response = await fetch(url)
            try{
        if(response.ok){
            const data = response.json
            console.log(data)
        }
        }
        catch(error){
            console.log(`So many errors ${error.message}`)
        }
    }
}
}

delayRetry("https://jsonplaceholder.typicode.com/todos/1").catch((err) => console.log(`Network error ${err}`))

async function timeOut() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log(data);
                resolve(data); 
            } catch (error) {
                reject(error);
            }
        }, 5000);
    });
}

timeOut().then((data) => console.log('Fetched data:', data))
         .catch((error) => console.log(`${error.message} occurred`));
