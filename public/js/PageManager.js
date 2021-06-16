class PageManager {
    constructor() {}

    loadPage() {
        var rm = new RequestManager();
        var tb = new TableBuilder();

        document.getElementById("search-button").addEventListener("click", () => {
            this.searchQuery(rm, tb);
        })
    }

    searchQuery(rm, tb) {
        var query = document.getElementById("search-input").value;
        rm.getCoordinates(query)
            .then(coordinates => {
                var lat = coordinates[0].lat;
                var long = coordinates[0].lon;
                console.log(lat, long);
            });
    }
}

var pm = new PageManager();
pm.loadPage();