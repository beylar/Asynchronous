getJSON("../data/earth-like-results.json").then(function(response) {
    var sequence = Promise.resolve();
    response.results.forEach(function(url) {
        //sequence = sequence.then(function()) -- use of series
        sequence.then(function(){ // -- use of parallel
            return getJSON(url)
        })
        .then(createPlanetThumb)
    //   getJSON(url).then(createPlanetThumb);
    });
  })
  .catch(function(e){
    console.log(e)
  })

  //thumbnails are being created in random order
  //using array methods -- implementing the network in series way for order
  //using parallel --- no assurance of the order

//using .map();
getJSON("../data/earth-like-results.json").then(function(response) {
    response.results.map(function(url) {
      getJSON(url).then(createPlanetThumb);
    });
});