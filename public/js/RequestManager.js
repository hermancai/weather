class RequestManager {
    constructor() {}

    async getCoordinates(query) {
        var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + query + "&limit=1&appid=" + apikey;
        console.log(url);
        var response = await fetch(url);
        return response.json();
    }

    async getForecast(lat, lon) {
        var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + 
            "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=imperial&appid=" + apikey;

        console.log(url);
        var response = await fetch(url);
        return response.json();
    }
}