class TableBuilder {
    constructor() {
        this.tableExists = false;
    }


    displayResults(results, lat, lon) {
        console.log(lat, lon);
        console.log(results);

        if (!this.tableExists) {
            this.buildCurrent();
            this.buildTable();
            this.tableExists = true;
        }

        this.fillCurrent(results, lat, lon);
    }


    buildCurrent() {
        var leftColumn = document.getElementById("current-left-column");
        leftColumn.appendChild(this.createNewElement("p", "current-time"));
        leftColumn.appendChild(this.createNewElement("p", "current-temp"));
        leftColumn.appendChild(this.createNewElement("img", "current-img"));
        leftColumn.appendChild(this.createNewElement("p", "current-conditions"));

        var rightColumn = document.getElementById("current-right-column");
        rightColumn.appendChild(this.createNewElement("p", "current-sunrise"));
        rightColumn.appendChild(this.createNewElement("p", "current-sunset"));
        rightColumn.appendChild(this.createNewElement("p", "current-windspeed"));
        rightColumn.appendChild(this.createNewElement("p", "current-coordinates"));
    }


    createNewElement(type, elementId) {
        var element = document.createElement(type);
        element.id = elementId;
        return element;
    }


    buildTable() {
        
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