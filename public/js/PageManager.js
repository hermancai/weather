class PageManager {
    constructor() {}

    loadPage() {
        var rm = new RequestManager();
        var tb = new TableBuilder();

        document.getElementById("search-button").addEventListener("click", () => {this.searchQuery(rm, tb);});
    }

    searchQuery(rm, tb) {
        var query = document.getElementById("search-input").value;
        if (!query) query = "san francisco";

        rm.getCoordinates(query)
            .then(coordinates => {
                if (coordinates.length == 0) {
                    alert("The city could not be found."); 
                }
                else {
                    var lat = coordinates[0].lat;
                    var lon = coordinates[0].lon;

                    rm.getForecast(lat, lon)
                        .then(results => {
                            tb.displayResults(results, lat, lon);
                        });
                }
            });
    }
}

var pm = new PageManager();
pm.loadPage();