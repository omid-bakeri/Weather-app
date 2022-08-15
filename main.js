let weather = {
    apikey: "bcde66e52c505d94e0cd5eab70823bea",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apikey
            )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".h2").innerText = "Weather in " + name;
        document.querySelector(".degree").innerText = temp + " °C";
        document.querySelector(".situation").innerText = description;
        document.querySelector(".Humidity").innerText =
            "Humidity :" + humidity + "%";
        document.querySelector(".windSpeed ").innerText =
            "Wind Speed :" + speed + " km/h";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".boxSearch").value);
    },
};
document.querySelector(".search").addEventListener("click", function() {
    weather.search();
});

// document
//     .querySelector(".searchBox")
//     .addEventListener("keyup", function(event) {
//         if (event.key == "enter") {
//             weather.search();
//         }
//     });

weather.search("Tehran");