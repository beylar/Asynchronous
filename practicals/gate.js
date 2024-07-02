async function performFastAsync({username, age, location}){
    const data = {username, age, location}
    console.log(data)
    const headerObject = {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/users", headerObject)
    const users = await response.json()
    return users
    console.log(users)
}

performFastAsync({username: "Beyla", age: 20, location: "Kigali"})
.catch((error) => console.log(error.message))


async function performFast({username, age, location}) {
    try {
        const response = new XMLHttpRequest();
        response.open("POST", "https://jsonplaceholder.typicode.com/users", true);
        response.setRequestHeader("Content-Type", "application/json");

        response.onreadystatechange = function() {
            if (response.readyState === 4) {
                // if(response.status > 200 || response.status < 300){
                    const data = JSON.parse(response.responseText);
                    console.log(data);
                // }
            }
        };

        response.send(JSON.stringify({username, age, location}));
    } catch (error) {
        console.log(error.message);
    }
}

performFast({username: "Beyla", age: 20, location: "Kigali"});


// async function racing(){
//     const promise1 = await fetch("https://dummyjson.com/posts").then((res) => console.log(`First ${res}`))
//     const promise2 = await fetch("https://this-may-not-exist.com/posts").then((resu) => console.log(`Second ${resu}`))
//     const promise3 = await fetch("https://jsonplaceholder.typicode.com/posts").then((result) => console.log(`Last ${result}`))

//     const races = Promise.any([promise1, promise2, promise3])
//     // console.log(races)
//     const data = await races.json()
//     console.log(data)
// }

// racing().catch((error) => console.log(error.message))


async function racing() {
    try {
        const urls = [
            "https://dummyjson.com/posts",
            // "https://this-may-not-exist.com/posts",
            "https://jsonplaceholder.typicode.com/posts"
        ];

        const fastestRes = await Promise.any(urls.map(url =>
            fetch(url).then(res => ({ url, res }))
        ));

        const data = await fastestRes.res.json(); 
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

racing();
