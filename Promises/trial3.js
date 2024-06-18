function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});

/* What is the output of the code?
1. error
2. success 1, error 1
3. success 1, success 2, success 3, success 4
4. success 1, success 2, success 3, error 1, success 4
5. error 1, success 1, success 2, success 3, success 4
6. error 1, success 4
*/