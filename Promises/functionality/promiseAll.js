//code  1

let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1, p2, p3, p4, p5]);

promise

.then(function(data) {
    data.forEach(function(data) {
        cconsole.log(data);
    });
})

.catch(function(error) {
    console.error('error', error);
});

// .... output: error p4


let s1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let s2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let s3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let s4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let s5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let promise1 = Promise.all([p1.catch(function() {}), p2.catch(function() {}), p3.catch(function() {}), p4.catch(function() {}), p5.catch(function() {})]);

promise1

.then(function(data) {
    data.forEach(function(data) {
        console.log(data);
    });
})

.catch(function(error) {
    console.error('error', error);
});

// .... output: p1
// p2
// p3
// undefined
// p5