class TableBuilder {
    constructor() {}


    displayResults(results, lat, lon) {
        this.fillCurrent(results, lat, lon);
    }


    fillCurrent(results, lat, lon) {
        document.getElementById("current-time").innerHTML = results.current.dt;
        document.getElementById("current-temp").innerHTML = Math.round(results.current.temp) + "\xB0";
        document.getElementById("current-img").src = this.getImagePath(results.current.weather[0].icon);
        document.getElementById("current-conditions").innerHTML = results.current.weather[0].description;

        document.getElementById("current-sunrise").innerHTML = "Sunrise: " + results.current.sunrise;
        document.getElementById("current-sunset").innerHTML = "Sunset: " + results.current.sunset;
        document.getElementById("current-windspeed").innerHTML = "Wind Speed: " + results.current.wind_speed + " miles/hour";
        document.getElementById("current-coordinates").innerHTML = "Coordinates: " + lat.toFixed(2) + ", " + lon.toFixed(2);
    }


    getImagePath(icon) {
        return "public/images/" + icon + ".png";
    }


}