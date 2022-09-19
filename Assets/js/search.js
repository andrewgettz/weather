// On page load
// Retrieve array from localStorage. 
// If empty, then create list items with default cities
// Then search for first in array
var cityList = []
if (localStorage.getItem('Cities') ===null){
    cityList = ["Alanta", "Buenos Aires", "Seoul", "London", "San Francisco", "Beijing"]

    localStorage.setItem('Cities', JSON.stringify(cityList))
    
    cityList.forEach(element => {
        $('#searchHistory').append(`<li class="searchItem">${element}</li>`)
    })

    currentWeather(cityList[0])
    getUVIndex(cityList[0])
    getForecast(cityList[0])

} else {

//Else if local storage is not empty, creat list items from cities already stored in local storage 

cityList = JSON.parse(localStorage.getItem('Cities'))

cityList.forEach(element => {
    $('#seachHistory').append(`<li class="searchItem">${element}</li>`)
})

    currentWeather(cityList[0])
    getUVIndex(cityList[0])
    getForecast(cityList[0])
}

$('.searchitem').on('click', function (event) {

    var itemText = event.target.innerText

    $('city-text').val(itemText)

    currentWeather(itemText)
    getUVIndex(itemText)
    getForecast(itemText)
})

//If a new city is added, addd to the array of cities. 
//Save the cities array to localStorage again. 
function addHistory(){

    $('#searchHistory').prepend(`<li class="searchItem">${searchedCity}</li>`)

    cityList.unshift(searchedCity)
    
    localStorage.setitem('Cities', JSON.stringify(cityList))
}

