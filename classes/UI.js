class UI{
    constructor() {
        this.description = document.querySelector(`#description`)
        this.temp =  document.querySelector(`#temp`)
        this.city = document.querySelector(`#location`)
    }
    drawWeather( data) {
        let celsius = Math.round(parseFloat(data.main.temp)-273.15);
        let description = data.weather[0].description;
        document.querySelector(`#location`).innerHTML =data.name;

        this.temp.innerHTML =celsius + `&deg;`;
        this.description.innerHTML =description;
    }
}