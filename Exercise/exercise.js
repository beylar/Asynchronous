console.log('start')
const promise = new Promise((resolve, reject) => {
    console.log('In promise');
    resolve()
}).then(res => {
    console.log('still in promise')
})

console.log('end')