const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?lat=5.6037&lon=0.1870&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp1').textContent = jsObject.main.temp;
        document.getElementById('speed1').textContent = jsObject.wind.speed;
        document.getElementById('humidity1').textContent = jsObject.main.humidity;
        document.getElementById('currently1').textContent = jsObject.weather[0].main;
    });