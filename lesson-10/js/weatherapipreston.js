const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp').textContent = jsObject.main.temp;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('currently').textContent = jsObject.weather[0].main;
        jsObject.list.forEach(x => {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                console.log(jsObject.list[i].main.temp.toFixed(0));
            }
        })
        document.getElementById('temp1').textContent =jsObject.list[i].main.temp.toFixed(0);
        document.getElementById('temp2').textContent =jsObject.list[i].main.temp.toFixed(1);
        document.getElementById('temp3').textContent =jsObject.list[i].main.temp.toFixed(2);
        document.getElementById('temp4').textContent =jsObject.list[i].main.temp.toFixed(3);
        document.getElementById('temp5').textContent =jsObject.list[i].main.temp.toFixed(4);
    });