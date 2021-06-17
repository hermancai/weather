class TableBuilder {
    constructor() {}


    displayResults(results) {
        this.fillCurrent(results);
    }


    fillCurrent(results) {
        document.getElementById("current-time").innerHTML = results.current.dt;
        document.getElementById("current-temp").innerHTML = Math.round(results.current.temp) + "\xB0";
        document.getElementById("current-img").src = this.getImagePath(results.current.weather[0].icon);
        document.getElementById("current-conditions").innerHTML = results.current.weather[0].description;

        document.getElementById("current-sunrise").innerHTML = "Sunrise: " + results.current.sunrise;
        document.getElementById("current-sunset").innerHTML = "Sunset: " + results.current.sunset;
        document.getElementById("current-windspeed").innerHTML = "Wind Speed: " + results.current.wind_speed + " miles/hour";
        document.getElementById("current-coordinates").innerHTML = 
            "Coordinates: " + results.lat.toFixed(2) + ", " + results.lon.toFixed(2);
    }


    getImagePath(icon) {
        return "public/images/" + icon + ".png";
    }


}