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


//exercise 4
console.log("start");
setTimeout(() => {
    console.log("From set timeout");
})
Promise.resolve().then(() => {
    console.log('resolve');
})
console.log("end");


//exercise 5
const promise1 = new Promise((resolve, reject) => {
    console.log("In promise 1");
    setTimeout(() => {
        console.log('timerStart');
        resolve('success')
        console.log('timerEnd');
    }, 0)
    console.log("In promise 2");
})
promise1.then((res) => {
    console.log('In promise 4');
})
console.log("In console 4");


//exercise 6
const timer1 = setTimeout(() => {
    console.log('timer 1')
    const promise1 = Promise.resolve().then(() => {
        console.log('promise 1');
    }, 0)
})

const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0);