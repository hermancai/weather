class PageManager {
    constructor() {}

    loadPage() {
        var rm = new RequestManager();
        var tb = new TableBuilder();

        document.getElementById("search-button").addEventListener("click", () => {this.searchQuery(rm, tb);});
        document.getElementById("search-input").addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("search-button").click();
            }
        });
    }

    searchQuery(rm, tb) {
        this.timeOutButton(document.getElementById("search-button"));
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
                            document.getElementById("daily-container").style.visibility = "visible";
                        });
                }
            });
    }

    timeOutButton(button) {
        button.disabled = true;
        setTimeout(function() {
            button.disabled = false;
        }, 2000);
    }
}

var pm = new PageManager();
pm.loadPage();