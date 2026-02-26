// weatherJson.properties.periods.[name/temperature/icon/detailedForcast]

let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherTable = document.querySelector('#weather-forecast')

fetch(weatherUrl)
    .then(response => response.json()) // Shorter version - does the same thing.
    .then(weatherJson => {
        displayWeatherTable(weatherJson) // Create function farther down to keep code format clean/easy to read
    })
    .catch(error => {
        console.log(error)
        alert('Sorry, could not get weather forcast')
    })

function displayWeatherTable(weatherJson) {
     //console.log(weatherJson) - console check
     let forcastArray = weatherJson.properties.periods
     //console.log(forcastArray) - console check
     forcastArray.forEach(forcastPeriodData => {

        // Creates the new row for the html table
        let tableRow = document.createElement('tr')

        //Get period name e.g. Tonight, Friday, Firday Night
        
        //console.log(forcastPeriodData) - console check
        // Connects to weather API 'name' = time
        let periodName = forcastPeriodData.name
        //console.log(periodName) - console check

        // Creates the element needed to put our data into the table
        let periodNameTableData = document.createElement('td')
        // Places the data into the 'td' element
        periodNameTableData.innerHTML = periodName

        // Places the 'td' element with data into 'tr' element
        tableRow.appendChild(periodNameTableData)

        // Get temperature, create td, add to table row
        let temperature = forcastPeriodData.temperature
        let temperatureUnit = forcastPeriodData.temperatureUnit
        let temperatureTableData = document.createElement('td')
        temperatureTableData.innerHTML = temperature + temperatureUnit
        tableRow.appendChild(temperatureTableData)

        // Add weather icon
        let weatherIconSource = forcastPeriodData.icon 
        let weatherIconTableData = document.createElement('td')
        let weatherIconImage = document.createElement('img')
        weatherIconImage.src = weatherIconSource
        weatherIconTableData.appendChild(weatherIconImage)
        tableRow.appendChild(weatherIconTableData)

        // Add weather description - detailed forcast
        let detailedForcast = forcastPeriodData.detailedForecast
        //console.log(detailedForcast)
        let detailedForcastTableData = document.createElement('td')
        detailedForcastTableData.innerHTML = detailedForcast
        tableRow.appendChild(detailedForcastTableData)
        

        // Add table row (with all of the td elenemts) to the table
        // Fianlly places everything together in html
        weatherTable.appendChild(tableRow)

     });
}