// weatherJson.properties.periods.[name/temperature/icon/detailedForcast]

let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherTable = document.querySelector('#weather-forcast')

fetch(weatherUrl)
    .then(response => response.json()) // Shorter version - does the same thing.
    .then(weatherJson => {
        displayWeatherTable(weatherJson)
    })
    .catch(error => {
        console.log(error)
        alert('Sorry, could not get weather forcast')
    })

function displayWeatherTable(weatherJson) {
     console.log(weatherJson)
}