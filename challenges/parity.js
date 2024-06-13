function job(data) {
    return new Promise((resolve, reject) => {
        if(isNaN(data)){
            reject("error")
        }
        else if(data % 2 !== 0){
            setTimeout(function(){
                resolve("odd")
            },1000)
        }
        else if(data % 2 === 0){
            setTimeout(function(){
                reject("even")
            },2000)
        }
    })
}

module.exports = job;