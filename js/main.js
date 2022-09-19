//JS for default page behavior 

$("currentDate").text("Today " + moment().format('ddd Do')); 

//Genearte cards 5-day forcast based on current date 
for (let i = 0; i < 5; i++) {
    var startForecast = i + 1; 

    var forcastCard = $(`div[data-card|="${i}"]`); 

    forecastCard.htm(`<h4> ${moment().add (startForecast, 'days').format('ddd')} </h4>`)
}

var APIKey = "4a56f566a02550ae1a4ca20559e1de75"

var searchedCity

// Main functions: When city search is submitted
$(document).ready(function () {

    $('#city-search').submit(function () {
        event.preventDefault()
        searchedCity = $('#city-text').val().trim()
        currentWeather(searchedCity)
        getUVIndex(searchedCity)
        getForecast(searchedCity)
        addHistory(searchedCity)

    })

});
