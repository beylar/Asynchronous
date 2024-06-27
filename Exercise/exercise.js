// exercise 1
console.log('start')
const promise = new Promise((resolve, reject) => {
    console.log('In promise');
    resolve()
}).then(res => {
    console.log('still in promise')
})
console.log('end')

//exercise 2
console.log("start");
const fn = () =>
    new Promise((resolve, reject) => {
        console.log("In promise");
        resolve("success");
    });

console.log("middle");

fn().then((res) => {
    console.log(res);
});
console.log('end')

//exercise 3
console.log("start");
Promise.resolve('In Promise 1').then((res) => {
    console.log(res);
})
Promise.resolve('In promise 2').then((res) => {
    console.log(res);
})
console.log('end')