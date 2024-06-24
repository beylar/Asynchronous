// function reusable(callback){
//   setTimeout(function() {
//     console.log("The callback is next")
//     callback();
//   }, 1000);
// }

// function callback(){
//   console.log("What is it all about huh!")
// }
// reusable(callback)

function reusable(){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        console.log("The callback is next")
        resolve();
      })
    }).then(() => {
        console.log("What is it all about huh!")
    })
      // }).catch((error) => {
      //   console.log(`${error} occurred!`)
      // })
  }
  
  reusable();
  