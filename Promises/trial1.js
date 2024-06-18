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

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});

/* what is the output of the code above?
1. error, error, error caught, error:test
2. success, success, error caught, success: test
3. success, defeat, error, error caught, success: test
4. error, error caught, success: test
5. success, defeat, error, error defeat, error: test
6. success, error, defeat, success: test

*/