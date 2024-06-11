function get(url){
    return fetch(url, {
        method: "get"
    })
}

function getJSON(url){
    return get(url).then(function(response){
        return response.JSON()
    })
}

window.addEventListener('WebComponentsReady', function() {
    home = document.querySelector('section[data-route="home"]');
    getJSON()
    .then(function(response){
        addSearchHeader(response.query);
    })
    .catch(function(error){
        addSearchHeader('unknown');
        console.log(error)
    })
})