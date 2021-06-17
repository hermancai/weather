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
                    alert("No results were found."); 
                }
                else {
                    rm.getForecast(coordinates[0].lat, coordinates[0].lon)
                        .then(results => {
                            tb.displayResults(results);
                        });
                }
            });
    }
}

var pm = new PageManager();
pm.loadPage();