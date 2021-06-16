class RequestManager {
    constructor() {}

    async getCoordinates(query) {
        var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + query + "&limit=1&appid=" + apikey;
        var response = await fetch(url);
        return response.json();
    }
}