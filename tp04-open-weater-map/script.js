const apiKey = "5b71e4fe2b00826fc538e45e7cc7cbb7"; 

document.getElementById("search-btn").addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = await response.json();
    displayWeather(weatherData);
});

const displayWeather = (data) => {
    const weatherDiv = document.getElementById("weather");
    if (data.cod === 200) {
        weatherDiv.innerHTML = `
            <h2>Météo à ${data.name}</h2>
            <p>Température: ${data.main.temp} °C</p>
            <p>Conditions: ${data.weather[0].description}</p>
        `;
    } else {
        weatherDiv.innerHTML = `<p>Ville non trouvée</p>`;
    }
};