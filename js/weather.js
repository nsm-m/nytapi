$(document).ready(function () {


    function getWeather() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            document.getElementById('weather').style.display = 'flex';
        } else {
            console.log("Geolocation must be authorized");
            //document.getElementById('topstories').style.display = 'flex';

        }
    }


    function showPosition(position) {
        const geoloc = position;

        const lat = geoloc.coords.latitude;
        const long = geoloc.coords.longitude;

        fetch(`/.netlify/functions/fetch-weather?lat=${lat}&long=${long}`)
            .then(res => res.json()

            )
            .then(data =>

                showWeather(data.weather, data.main, data.sys, data.name),

            );

    }

    getWeather();



    function showWeather(weather, main, locationData, city) {

        let weatherMain = weather[0];
        let weatherInfo = weatherMain.main;
        let description = weatherMain.description;
        let icon = weatherMain.icon;
        let temperature = Math.trunc(main.temp);
        let country = locationData.country;
        let locationName = city;
        console.log(weather);
        $(".icon").html(`<img src=http://openweathermap.org/img/wn/${icon}@2x.png>`);
        $(".temperature").html(`<p>${temperature} &#8451</p>`);
        //   $(".weather-info").html(`<p>${weatherInfo}</p>`);
        $(".location").html(`<p>${locationName}, ${country} </p>`);
    }


});
