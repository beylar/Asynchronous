function job() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve('hello world')
        }, 2000)
    })
}

module.exports = job;