//Refactor using promise.all()

getJSON("../data/earth-like-results.json").then(function(response) {
    response.results.map(function(url) {
      getJSON(url).then(createPlanetThumb);
    });
});

//-- my code
const promise1 = Promise.resolve(response.results.map(function(url){
    getJSON(url)
}));
const promise2 = Promise.then(createPlanetThumb)
getJSON("../data/earth-like-results.json")
Promise.all([promise1, promise2]).then((values)=> {
    console.log(values)
})