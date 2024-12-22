function showweatherDetails(event){
    event.preventDefault();
    const city = getElementById("city").value;
    const apiKey = '552eed76055b6565d21dbb366574bdca';//my Api key 
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    fetch (apiURL)
        .then(response => response.json())
        .then(data=>{
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML =`<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })

}


document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );