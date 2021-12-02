//LS Objct
const ls = new LS()
//city data
const initCity = ls.getCity()


//weather objct
const weather = new Weather( initCity);
//ui objct
const ui = new  UI();

//events
const form = document.querySelector('#changeCity')
form.addEventListener('submit', changeWeather)


//change weather
function changeWeather(event){
    const city = document.querySelector('#cityName').value;
    weather.changeCity(city)
    ls.setCity(city)
    getWeather()
    document.querySelector('#cityName').value =''
    event.preventDefault()
}


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