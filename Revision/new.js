const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done")
    })
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("yes")
    })
})

async function execution(){
    let value1 = await promise1;
    console.log(value1);
    console.log("hello")
    let value2 = await promise2
    console.log(value2)
}

execution();