function fetchMultipleAPIs(){
    let promises = [];
    apiUrls.map(el => promise.push(el));
    Promise.all(promises)
    // let fetch = async(url) => {
    //     let response = await fetch(url);
    //     let data = await response.json()
    //     return data;
    // }
    // return Promise.all(fetch)
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
  fetchMultipleAPIs(apiUrls)
    .then(results => {
      console.log('Combined Results:', results);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });