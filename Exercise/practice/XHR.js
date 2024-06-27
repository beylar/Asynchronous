// function retrieve(){
//     let resource = './health_article.json'
//     const article = new XMLHttpRequest();
//     article.addEventListener('readystatechange', () => {
//         if(article.readyState === 4 && article.status === 200){
//             const data = JSON.parse(article.responseText)
//             console.log(data)
//         }
//     })
//     article.open('GET', resource, true)
//     article.send()
// }

// retrieve()

function healthArticle(){
    const url = './health_article.json'
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.open('GET', url, true)
    xhr.send()

    xhr.onload = function () {
     let articles = xhr.response.articles
     console.log(articles)
     let articlesDiv = document.getElementById('articles');
     articles.forEach(function(article) {
        let articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        let title = document.createElement('h2');
        title.textContent = article.title;
  
        let description = document.createElement('p');
        description.textContent = article.description;
  
        let waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
  
        let waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          let listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        let benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
  
        let benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          let listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
  
        articlesDiv.appendChild(articleDiv);
      });
    }
}
healthArticle()