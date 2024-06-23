Promise.resolve('Outer Promise')
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      console.log('Inner Promise created');
      resolve('Inner Promise');
    });
  })
  .then((result) => {
    console.log(result);
  });