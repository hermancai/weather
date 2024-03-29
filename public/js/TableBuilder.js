class TableBuilder {
    constructor() {}


    displayResults(results) {
        document.getElementById("current-container").style.backgroundColor = "#e8f7ff";
        this.fillCurrent(results);
        this.fillTable(results);
    }


    fillCurrent(results) {
        document.getElementById("current-temp").innerHTML = Math.round(results.current.temp) + "\xB0";
        document.getElementById("current-img").src = this.getImagePath(results.current.weather[0].icon);
        document.getElementById("current-conditions").innerHTML = "<small>" + results.current.weather[0].description + "</small>";
        
        document.getElementById("current-time").innerHTML = 
            "Local Time: " + this.convertToTime(results.current.dt + results.timezone_offset);
        document.getElementById("current-sunrise").innerHTML = 
            "Sunrise: " + this.convertToTime(results.current.sunrise + results.timezone_offset);
        document.getElementById("current-sunset").innerHTML = 
            "Sunset: " + this.convertToTime(results.current.sunset + results.timezone_offset);
        document.getElementById("current-windspeed").innerHTML = 
            "Wind Speed: " + results.current.wind_speed + " miles/hour";
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
        if (mm < 10) { mm = "0" + mm; }

        return hh + ":" + mm + " " + half;
    }


    fillTable(results) {
        this.fillWeekdayRow(results);
        this.fillTempRow(results);
        this.fillRainRow(results);
        this.fillMoonRow(results);
    }


    fillWeekdayRow(results) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var weekdayRow = document.getElementById("weekday-row");

        // get today's week index (0 - 6)
        var currentDay = new Date((results.daily[0].dt + results.timezone_offset) * 1000);
        var dayIndex = currentDay.getUTCDay();

        for (var i = 1, cell; cell = weekdayRow.cells[i]; i++) {
            cell.innerHTML = days[(dayIndex + i - 1) % 7];
            currentDay = new Date((results.daily[i - 1].dt + results.timezone_offset) * 1000);
            cell.innerHTML += " " + currentDay.getUTCMonth() + "/" + currentDay.getUTCDate() + "<br>";
            cell.innerHTML += '<img src="' + this.getImagePath(results.daily[i - 1].weather[0].icon) + '">';
            cell.innerHTML += "<br><small>" + results.daily[i - 1].weather[0].description + "</small>";
        }
    }


    fillTempRow(results) {
        var tempRow = document.getElementById("temp-row");

        for (var i = 1, cell; cell = tempRow.cells[i]; i++) {
            cell.innerHTML = results.daily[i - 1].temp.min + "\xB0<br><br>" + results.daily[i - 1].temp.max + "\xB0";
        }
    }


    fillRainRow(results) {
        var rainRow = document.getElementById("rain-row");

        for (var i = 1, cell; cell = rainRow.cells[i]; i++) {
            cell.innerHTML = Math.round((results.daily[i - 1].pop * 100)) + "%";
        }
    }


    fillMoonRow(results) {
        var moonRow = document.getElementById("moon-row");

        for (var i = 1, cell; cell = moonRow.cells[i]; i++) {
            cell.innerHTML = results.daily[i - 1].moon_phase;
        }
    }


}