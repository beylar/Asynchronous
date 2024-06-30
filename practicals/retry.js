async function retrying(url, num) {
    try {
      const response = await fetch(url);
      
      if (response.status !== 200) {
        throw new Error("Error occurred");
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (num <= 0) {
        throw new Error(`${error.message} occurred`);
      } else {
        console.log(`Retrying... attempts left: ${num - 1}`);
        return retrying(url, num - 1);  
      }
    }
  }
  
  retrying("https://jsonplaceholder.typicode.com/todoss/1", 3)
    .catch((error) => console.log(error.message));
  