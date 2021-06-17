class TableBuilder {
    constructor() {}


    displayResults(results) {
        document.getElementById("current-container").style.backgroundColor = "#e8f7ff";
        this.fillCurrent(results);
        this.fillTable(results);
    }


    fillCurrent(results) {
        document.getElementById("current-time").innerHTML = this.convertToTime(results.current.dt + results.timezone_offset);
        document.getElementById("current-temp").innerHTML = Math.round(results.current.temp) + "\xB0";
        document.getElementById("current-img").src = this.getImagePath(results.current.weather[0].icon);
        document.getElementById("current-conditions").innerHTML = results.current.weather[0].description;

        document.getElementById("current-sunrise").innerHTML = 
            "Sunrise: " + this.convertToTime(results.current.sunrise + results.timezone_offset);
        document.getElementById("current-sunset").innerHTML = 
            "Sunset: " + this.convertToTime(results.current.sunset + results.timezone_offset);
        document.getElementById("current-windspeed").innerHTML = "Wind Speed: " + results.current.wind_speed + " miles/hour";
        document.getElementById("current-coordinates").innerHTML = 
            "Coordinates: " + results.lat.toFixed(2) + ", " + results.lon.toFixed(2);
    }


    getImagePath(icon) {
        return "public/images/" + icon + ".png";
    }


    convertToTime(seconds) {
        var day = new Date(seconds * 1000);
        var hh = day.getUTCHours();
        var mm = day.getUTCMinutes();
        var half = "AM";
        
        // convert to 12-hour clock
        if (hh >= 12) { half = "PM"; }
        if (hh > 12) { hh = hh % 12; }
        if (hh == 0) { hh = 12; }

        return hh + ":" + mm + " " + half;
    }


    fillTable(results) {
        var table = document.getElementById("daily-table");

        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 1, col; col = row.cells[j]; j++) {
                col.innerHTML = i + ", " + j;
            }
        }
    }


}