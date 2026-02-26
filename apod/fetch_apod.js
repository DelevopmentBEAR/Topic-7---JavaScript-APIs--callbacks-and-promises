let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=ohdCtR3WBJuAXwlaRdsOgj7bLeI3euZXepSLvMgS'

// Fetch can fetch many kinds of web resources (e.g. images, other web pages), not just JSON.
// It has to convert the response into JSON.
// But, it could be quite slow for a large JSON response.
fetch(apodApiUrl) // Fetch returns a Promise. The promise will Resolve = be successful (then) or be rejected = fail/error (catch)
    .then(response => { // Response is the raw response data - it's bytes that can be found turn into JSON (hopefully)
        return response.json // Extract JSON from the response
    }) 
    .then( data =>
        console.log(data)
    ) // The then function is called if the Promise is succesful
    .catch( error => {
        console.log(error)
        apodExplanation.innerHTML = 'Sorry, could not fetch the astronomy picture.'
    }) // This will be called if there is an error - no internet connect, wrong URL, ect.