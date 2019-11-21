const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    });