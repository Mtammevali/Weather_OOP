//weather objct
const weather = new Weather( 'Tartu');

const ui = new  UI();
//get city weather
function getWeather(){
    weather.getWeather()
        .then(data =>{
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

getWeather()