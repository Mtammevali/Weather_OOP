//weather objct
const weather = new Weather( 'Tartu');

//get city weather
function getWeather(){
    weather.getWeather()
        .then(data =>{
            console.log(data)
        })
        .catch(error => console.log(error))
}

getWeather()