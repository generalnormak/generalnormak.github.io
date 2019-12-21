const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?lat=25.2637&lon=57.5759&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp2').textContent = jsObject.main.temp;
        document.getElementById('speed2').textContent = jsObject.wind.speed;
        document.getElementById('humidity2').textContent = jsObject.main.humidity;
        document.getElementById('currently2').textContent = jsObject.weather[0].main;
    });