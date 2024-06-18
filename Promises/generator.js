function async(generatorFunc) {
    return function() {
      const generator = generatorFunc.apply(this, arguments);
  
      function handle(result) {
        if (result.done) {
          return Promise.resolve(result.value);
        }
  
        return Promise.resolve(result.value)
          .then(function(res) {
            return handle(generator.next(res));
          })
          .catch(function(err) {
            return handle(generator.throw(err));
          });
      }
  
      try {
        //handle(): is a recursiv function
        return handle(generator.next());
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }