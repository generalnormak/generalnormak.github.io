const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fish Haven,83287&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp').textContent = jsObject.main.temp;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('currently').textContent = jsObject.weather[0].main;
    });