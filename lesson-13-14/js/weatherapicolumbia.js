const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?lat=11.0041&lon=74.8070&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
fetch(apiURL3)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp3').textContent = jsObject.main.temp;
        document.getElementById('speed3').textContent = jsObject.wind.speed;
        document.getElementById('humidity3').textContent = jsObject.main.humidity;
        document.getElementById('currently3').textContent = jsObject.weather[0].main;
    });