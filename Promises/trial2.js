function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
});

/* What is the output of the code above?
1. error, success, error caught
2. success, success
3. success, error, success, error
4. success, error, error caught
5. error, error caught, success
6. error, error caught, success, error
7. success, error, error
8. success, success, success

*/
