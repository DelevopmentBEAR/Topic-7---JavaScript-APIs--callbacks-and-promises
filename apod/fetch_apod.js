let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=4mUBxlioTv7duJ8ef3MqlrtJebk0s3tvatb5MMaG'

// Fetch can fetch many kinds of web resources (e.g. images, other web pages), not just JSON.
// It has to convert the response into JSON.
// But, it could be quite slow for a large JSON response.
fetch(apodApiUrl) // Fetch returns a Promise. The promise will Resolve = be successful (then) or be rejected = fail/error (catch)
    .then( response => { // Response is the raw response data - it's bytes that can be found turn into JSON (hopefully)
        return response.json // Extract JSON from the response
    }) 
    // Below is where we get our specific data to return to html
    .then( data => {
        console.log(data)

        // Grabs title from apod, call it 'title'
        let title = data.title
        // Return 'title' to html
        apodTitle.innerHTML = title

        // Grabs explanation, we give it a name, return to html
        let explanation = data.explanation
        apodExplanation.innerHTML = explanation

        // Asks data for media type
        let mediaType = data.media_type

        // If media type = image,
        if (mediaType === 'image'){
            // Connect to the image url and send back to html
            apodImage.src = url
            // Unhide image on html
            apodImage.style.display = 'block'
        }
        // Else if media type = video
        else if (mediaType === 'video'){
            // Connect to the video url and send back to html
            apodVideo.src = url
            // Unhide video on html 
            apodVideo.style.display = 'block'
        }
        else {
            // Otherwise, send an error message
            alert('Unknown media type')
        }

        // Same as above but with video
        let video = data.video
        apodVideo.innerHTML = video
    }) // The then function is called if the Promise is succesful
    .catch( error => {
        console.log(error)
        apodExplanation.innerHTML = 'Sorry, could not fetch the astronomy picture.'
    }) // This will be called if there is an error - no internet connect, wrong URL, ect.