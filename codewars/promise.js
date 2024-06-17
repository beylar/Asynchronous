async function promiseHelloWorld(str) {
    // Convert the synchronous logic into an asynchronous operation
    const result = await new Promise((resolve, reject) => {
        try {
            if (typeof str === 'string') {
                resolve("valid value");
            } else {
                reject("Please enter a valid value");
            }
        } catch (error) {
            reject(error);
        }
    });
    return result;
}
// console.log(promiseHelloWorld("yes"))
(async () => {
    try {
        const message = await promiseHelloWorld("yes");
        console.log(message);
    } catch (error) {
        console.error(error);
    }
})();
