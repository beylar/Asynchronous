// Promise Chain

const promise = new Promise((resolve, reject) => {
    console.log('Promise created');
    resolve('First resolve');
  });
  
  promise
    .then((result) => {
      console.log(result);
      return 'Second resolve';
    })
    .then((result) => {
      console.log(result);
      throw new Error('Error in chain');
    })
    .catch((error) => {
      console.error('Caught:', error.message);
    })
    .then(() => {
      console.log('After catch');
    });
  