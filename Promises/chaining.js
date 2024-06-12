var urls = [];
async('example.json') //-----if error occurs here what will be logged
.then (function(data){
    urls = data.urls;  //-----if error occurs here what will be logged
    return async(url[0])
})
.then (undefined, function(e){
    console.log(1);
    //recovery() is a promise itself
    return recovery();
})
.catch(function(e){
    console.log(2);
    return recovery();  //-----if error occurs here what will be logged
})
.then (function(){
    console.log(3);
    return async(urls[1])  //-----if error occurs here what will be logged
})
.then (async, function(e){
    console.log(4);
    ahhhIGiveUp();
})