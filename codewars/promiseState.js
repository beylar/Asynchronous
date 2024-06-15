//using async and await
async function getState(promise) {
    try {
        await promise;
        return "fulfilled";
    } catch (error) {
        return "rejected"; 
    }
}
function getState(promise) {
    const pending = new Promise(resolve => setTimeout(resolve, 0, "pending"));
    return Promise.race([promise, pending])
        .then(result => {
            if (result === "pending") {
                return "pending";
            }
            return "fulfilled";
        })
        .catch(() => "rejected");
}

const p = Promise.resolve();
getState(p).then(state => console.log(state)); // "fulfilled"

const n = Promise.reject();
getState(n).then(state => console.log(state)); // "rejected"

const s = new Promise(() => {});
getState(s).then(state => console.log(state)); // "pending"
