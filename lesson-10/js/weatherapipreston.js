const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp').textContent = jsObject.main.temp;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('currently').textContent = jsObject.weather[0].main;
    });

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject);
                for (let i = 0; i < jsObject.list.length; i++) {
                    if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                        console.log(jsObject.list[i].dt_txt);
                    }
                }

            });