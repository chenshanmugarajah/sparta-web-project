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
            displayNews(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error mate: ', err);
    });
}

var displayNews = (data) => {
    
    var allNews = new Array(data.docs);

    for (let i=0; i<10; i++){

        var news = allNews[0][i];
        var newsBlock = document.getElementById("news" + (i+1));
        var title = document.createElement('h1');
        title.innerHTML = news.title;
        var author = document.createElement('p');
        author.innerHTML = "By " + news.news_site_long + " on " + unixToDate(news.date_published);
        var img = document.createElement('img');
        img.src = news.featured_image;
        var link = document.createElement('a');
        link.innerHTML = "Find out more"
        link.href = news.url;
        link.target = "_blank"

        newsBlock.appendChild(title);
        newsBlock.appendChild(author);
        // newsBlock.appendChild(img);
        newsBlock.appendChild(link);

    }
}

var randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

var unixToDate = (unix_timestamp) => {

    var date = new Date(unix_timestamp * 1000);

    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    return day + "/" + month + "/" + year;
}

document.querySelectorAll('.news').forEach(news => news.addEventListener("click", () => {
    var text = news.innerText;
    var msg = new SpeechSynthesisUtterance();
    msg.rate = 0.8;
    msg.pitch = 0;
    msg.text = text;

    speechSynthesis.speak(msg);

}))