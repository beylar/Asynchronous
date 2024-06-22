// Async/Await with Promises

async function asyncFunction() {
    console.log('Inside async function');
    return 'Async Function Result';
  }
  
  console.log('Start');
  
  asyncFunction().then((result) => {
    console.log(result);
  });
  
  console.log('End');
  