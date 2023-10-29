const BASE = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKEY = "7ba1d67142fe09f4fdd9fe3b9100665e";
let city = window.localStorage.getItem("city") || "";

async function getWeather() {
    const response = await fetch(`${BASE}&appid=${apiKEY}&q=${city}`);
    const data = await response.json();

    if (data.cod !== "404") {
        document.querySelector(".city").textContent = `${data.name},`;
        document.querySelector(".country").textContent = data.sys.country;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".weather").textContent = data.weather[0].main;
        document.querySelector(".date").textContent = new Date().toLocaleDateString();
        let weatherIcon = document.querySelector(".weather-icon");
        let cc = document.querySelector(".weather-box");
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
            document.body.style.cssText = "background-color: #C4E1E8;"
        }else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
            document.body.style.cssText = "background-color: #FEE5BF;"
        }else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
            document.body.style.cssText = "background-color: #89CFF3;"
        }else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png";
            document.body.style.cssText = "background-color: #A0E9FF;"
        }else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
            document.body.style.cssText = "background-color: #AEDEFC;"
        }else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            document.body.style.cssText = "background-color: #0174BE;"
        }else {
            weatherIcon.src = "images/icon.png";
        }

        document.querySelector(".wait").style.display = "none";
        document.querySelector(".weather-box").style.display = "flex";
    } else {
        document.querySelector(".waitPa").textContent = "City not found";
    };
};

getWeather()

document.querySelector(".search-bar").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        city = document.querySelector(".search-bar").value;
        window.localStorage.setItem("city", city);
        document.querySelector(".search-bar").value = "";
        getWeather();
    }
});

document.querySelector(".btn").addEventListener("click", () => {
    city = document.querySelector(".search-bar").value;
    window.localStorage.setItem("city", city);
    document.querySelector(".search-bar").value = "";
    getWeather();
});
