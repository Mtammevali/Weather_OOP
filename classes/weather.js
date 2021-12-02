class Weather{
    constructor(city) {
        this.city = city;
        this.key = '0e33b479efab190febe3eabb18166e14' ;
    }

     async getWeather(){
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
         const responseData = await response.json()
         return responseData
    }
}