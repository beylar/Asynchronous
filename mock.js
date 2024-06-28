// const promise = new Promise((resolve, reject) => {
//     console.log('Promise created');
//     resolve('First resolve');
//   });
  
//   promise
//     .then((result) => {
//       console.log(result);
//       return 'Second resolve';
//     })
//     .then((result) => {
//       console.log(result);
//       throw new Error('Error in chain');
//     })
//     .catch((error) => {
//       console.error('Caught:', error.message);
//     })
//     .then(() => {
//       console.log('After catch');
//     });

    //Promise created
    //First resolve
    //Second resolve
    //Caught: Error in chain
    //After catch



    async function weatherCondition(countryName){
        try{
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            const data = await response.json()
            // console.log(data[0])
            const latitude = data[0].latlng[0]
            const longitude = data[0].latlng[1]
            const capital = data[0].capital[0]
            // console.log(capital)
            // console.log(latitude)
            // console.log(longitude)
    
            const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            const climate = await weather.json()
            // console.log(climate)
          const value = climate.current_weather_units["winddirection"]
            // console.log(climate.current_weather["temperature"])
            const temperature = climate.current_weather["temperature"]
            console.log(`Country: ${countryName}`)
            console.log(`Capital: ${capital}`)
            console.log(`Current temperature: ${temperature} ${value}C`)
        }
        catch(error){
            console.log(`Network error: ${error}`)
        }
    }
    weatherCondition("Rwanda")