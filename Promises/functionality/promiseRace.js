function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time, 'success ' + time);
    });
}

Promise.race([delay(500), delay(100)]).then(function(data) {
    console.log(data);
});

// output: success 100