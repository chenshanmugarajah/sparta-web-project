console.log("Nasa Fetch JS loaded")

var randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

var searchNasa = (query) => {

    fetch("https://images-api.nasa.gov/search?q=" + query)
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }
        response.json().then(function(data) {
            displayData(data.collection.items)
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    })

}

var displayData = (data) => {
    var rand = randomNumberBetween(20, 50)
    var selectedData = data[rand].data[0]
    var nasaId = selectedData.nasa_id
    var title = selectedData.title;
    var desc = selectedData.description;
    var date_created = selectedData.date_created.split("T");
    var img = data[rand].links[0].href

    document.getElementById('planet-info').innerHTML = `<h1>${nasaId}: ${title}<h1/><h3>${desc}<h3/><img src=${img} class="modal-img"><p>Date created: ${date_created[0]}<p/>`;

}