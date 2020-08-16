console.log("News JS loaded")

var url = "https://spaceflightnewsapi.net/api/v1/articles?search="

window.onload = () => {
    fetch(url + "space")
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        response.json().then(function(data) {
            handleResponse(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error mate: ', err);
    });
}

var handleResponse = (data) => {
    var dataArr = data.docs;
    console.log(dataArr)
}

var randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}