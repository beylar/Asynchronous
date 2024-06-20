const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The first promise executed!")
    }, 10000)
})

const promise2 = new Promise((resolve, reject) => {
    resolve("The second promise executed!")
},20000)

async function firstPromise(){
    const val2 = await promise2;
    console.log("Hello World")
    console.log(val2)
    const val1 = await promise1;
    console.log(val1)
}

firstPromise();

