

function getWeather() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


function showPosition(position) {
    const geoloc = position;

    const lat = geoloc.coords.latitude;
    const long = geoloc.coords.longitude;
    // console.log("lat" + lat);
    // console.log("long" + long);


    fetch(`/.netlify/functions/fetch-weather?lat=${lat}&long=${long}`)
        .then(res => res.json())
        .then(data =>

            showWeather(data.current, data.location),

        );

}

getWeather();



function showWeather(val, loc) {
    //
    let stringifiedWeather = JSON.stringify(val);
    let weatherData = JSON.parse(stringifiedWeather);
    let temperature = weatherData.temperature;
    let icon = weatherData.weather_icons;
    let description = weatherData.weather_descriptions;

    // console.log("temperature" + temperature);
    // console.log("icon" + icon);
    // console.log("description" + description);


    let stringifiedLocation = JSON.stringify(loc);
    let locationData = JSON.parse(stringifiedLocation)
    let city = locationData.name;
    let region = locationData.region;
    let country = locationData.country;


    // console.log("city" + city);
    // console.log("region" + region);
    // console.log("country" + country);

    $("#icon").attr("src", ` ${icon}`);
    $(".temperature").html(`<p>${temperature}</p>`);
    $(".city").html(`<p>${city},${region} </p>`);
    $(".country").html(`<p>${country}</p>`);



}



