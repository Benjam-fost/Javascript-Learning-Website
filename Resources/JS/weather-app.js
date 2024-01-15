const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "a010485a7f59da87ff8814abd21bf010";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const data = await getData(city);
            displayInfo(data);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else displayError("Please enter a city");
});

async function getData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}
async function displayInfo(data){
    const {name: city,
            main: {temp, humidity},
            weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = getEmoji(id);



    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    emojiDisplay.classList.add("weatherEmoji")

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emojiDisplay);
}
function getEmoji(id){
    switch(true){
        case (id >= 200 && id < 300):
            return "⛈";
        case (id >= 300 && id < 400):
            return "☔";
        case (id >= 500 && id < 600):
            return "🌧";
        case (id >= 600 && id < 700):
            return "☃";
        case (id >= 700 && id < 800):
            return "🌫";
        case (id === 800):
            return "🌞";
        case (id >= 801 && id < 810):
            return "☁";
        default:
            return "⁉"
    }
}
function displayError(message){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent="";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}