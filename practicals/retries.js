async function retring(url, retries) {
    let count = 0;
    async function fetching() {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("Fetch failed")
            }
            const data = await response.json()
            console.log(data)
            return data
        }
        catch (error) {
            if (count < retries) {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        count++
                        fetching()
                        console.log("retrying")

                    }, count * 1000)
                })
            }
            else {

                console.log(error.message)
            }
        }
    }
    fetching()
}
retring("https://jsonplaceholder.typicode.com/users/1", 3)


function nestedPromises() {
    return new Promise((resolve) => {
        console.log('Start');
        setTimeout(() => {
            console.log('Timeout 1');
            new Promise((resolve) => {
                console.log('Nested Promise Start');
                setTimeout(() => {
                    console.log('Timeout 2');
                    resolve('Resolved');
                }, 1000);
            }).then(() => {
                console.log('Nested Promise End');
            });
        });
        resolve('Promise Resolved');
    });
}

async function questionOne() {
    const result = await nestedPromises();
    console.log(result)
}

//Start, timeout 1, Nested promise start, timeout 2,  