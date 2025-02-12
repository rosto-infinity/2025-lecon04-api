const apiKey = "5b71e4fe2b00826fc538e45e7cc7cbb7";

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const cityInput = document.getElementById("city");
  const weatherDiv = document.getElementById("weather");


  if (!searchBtn || !cityInput || !weatherDiv) {
    console.error("Un ou plusieurs éléments du DOM sont introuvables.");
    return;
}

  searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
      weatherDiv.innerHTML = `<p style="color:red;">Veuillez entrer un nom de ville.</p>`;
      return;
  }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
    !response.ok ? weatherDiv.innerHTML = `<p style="color:red;">Erreur : Ville non trouvée</p>` : null;
    const weatherData = await response.json();
    displayWeather(weatherData);
  });

  function displayWeather(data) {
    weatherDiv.innerHTML = `
      <h2>Météo à ${data.name}, ${data.sys.country}</h2>
      <p><strong>Température :</strong> ${data.main.temp} °C</p>
      <p><strong>Conditions :</strong> ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icône météo" width="100">
    `;
  }
});


// const apiKey = "5b71e4fe2b00826fc538e45e7cc7cbb7"; 

// document.addEventListener("DOMContentLoaded", () => {
//     const searchBtn = document.getElementById("search-btn");
//     const cityInput = document.getElementById("city");
//     const weatherDiv = document.getElementById("weather");

//     if (!searchBtn || !cityInput || !weatherDiv) {
//         console.error("Un ou plusieurs éléments du DOM sont introuvables.");
//         return;
//     }

//     searchBtn.addEventListener("click", async () => {
//         const city = cityInput.value.trim();
//         if (!city) {
//             weatherDiv.innerHTML = `<p style="color:red;">Veuillez entrer un nom de ville.</p>`;
//             return;
//         }

//         try {
//             const response = await fetch(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
//             );

//             if (!response.ok) throw new Error("Ville non trouvée");

//             const weatherData = await response.json();
//             displayWeather(weatherData);
//         } catch (error) {
//             weatherDiv.innerHTML = `<p style="color:red;">Erreur : ${error.message}</p>`;
//         }
//     });

//     const displayWeather = (data) => {
//         weatherDiv.innerHTML = `
//             <h2>Météo à ${data.name}, ${data.sys.country}</h2>
//             <p><strong>Température :</strong> ${data.main.temp} °C</p>
//             <p><strong>Conditions :</strong> ${data.weather[0].description}</p>
//             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
//                  alt="Icône météo" width="100">
//         `;
//     };
// });

