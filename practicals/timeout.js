//Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

// async function timing(url){
//     let display = setInterval(() => {
//         const response = fetch(url)
//         const data = response.json
//         // console.log(data)
//         console.log(2)
//     }, 2000)

//     setTimeout(() => {
//         clearInterval(display)
//         console.log("Cleared the interval")
//     }, 5000)
// }
// timing()


// You need to fetch data from two different APIs concurrently. The first API provides user data, and the second API 
// provides the user's posts. If either request fails or takes more than 5 seconds, you should handle the error 
// gracefully and return a meaningful error message. Write an `async` function `fetchUserData` that accomplishes this.

// **APIs:**

// 1. User data: `https://jsonplaceholder.typicode.com/users/1`
// 2. User posts: `https://jsonplaceholder.typicode.com/posts?userId=1`


async function fetchHandle(){
    try{
    const controller = new AbortController();
    const { signal } = controller
    const counter = setTimeout(() => {
        controller.abort()
    }, 5000)

    const first = fetch("https://jsonplaceholder.typicode.com/users/1", {signal})
    first.then((response) => {
        if(response.ok){
            clearTimeout(counter)
            const data = response.json()
            console.log(data)
        }
    })

    const second = fetch("https://jsonplaceholder.typicode.com/posts?userId=1", {signal})
    second.then((response) => {
        if(response.ok){
            clearTimeout(counter)
            const posts = response.json()
            console.log(posts)
        }
    })
}
catch(error){
    if(error.name === "AbortError"){
        throw new Error(`Time out`)
    }
    else{
        throw Error
    }
}
}

fetchHandle().catch((error) => console.log(error.message))

async function fetchUserData() {
    const fetchWithTimeout = (url, timeout) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);
            fetch(url)
                .then(response => {
                    clearTimeout(timer);
                    if (!response.ok) {
                        reject(new Error(`HTTP error! status: ${response.status}`));
                    } else {
                        resolve(response.json());
                    }
                })
                .catch(reject);
        });
    };

    try {
        const userPromise = fetchWithTimeout("https://jsonplaceholder.typicode.com/users/1", 5000);
        const postsPromise = fetchWithTimeout("https://jsonplaceholder.typicode.com/posts?userId=1", 5000);

        const [userData, userPosts] = await Promise.all([userPromise, postsPromise]);

        console.log('User Data:', userData);
        console.log('User Posts:', userPosts);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchUserData();


const guessTheOutPut =() => {
    setTimeout(() => console.log("timeout"), 100);
  
     setTimeout(() => console.log("apuuuuu"), 0);
  
     setTimeout(() => console.log("hahha"), 0);
  
     setTimeout(() => console.log("yaaaaa"));
  
     setImmediate(() => console.log("immediate"));
  
    Promise.resolve()
      .then(() => console.log("promise"));
  
    console.log('where do i fall')
  }
  console.log(guessTheOutPut())

function compile(){
    let count = 0;
    console.log("start")
    const timeof = setInterval(() => {
      count++
      console.log(count)
    }, 1000)
    setTimeout(function() {
      clearInterval(timeof)
      console.log("Timed out")
    }, 3000);
    
    console.log("end")
  }
  compile()