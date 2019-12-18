const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
var days = 1;
var icons = 1;
var temps = 1;
fetch(forecastapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        for (let i = 0; i < jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                console.log(jsObject.list[i].dt_txt);
               /* var d = new Date();
                d.setDate(jsObject.list[i].dt_txt);
                document.getElementById("day" + days).innerHTML = d;*/
                document.getElementById("day" + days).innerHTML = jsObject.list[i].dt_txt;
                days++;
            document.getElementById("temp" + temps).innerHTML = jsObject.list[i].main.temp + "&#176F";
            temps++;
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.list[i].weather[0].description; // note how we reference the weather array
        /*document.getElementById('imagesrc' + icons).innerHTML = imagesrc; // informational specification only*/
        document.getElementById('icon' + icons).setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon' + icons).setAttribute('alt', desc);
        icons++;

                /*let card = document.createElement('section');
                let table = document.createElement('table');
                let thead = document.createElement('thead');
                let caption = document.createElement('caption');
                let tbody = document.createElement('tbody');
                let tr = document.createElement('tr');
                let th = document.createElement('th');
                let td = document.createElement('td');
                let image = document.createElement('img');

                caption.textContent = '5 Day Forcast';

                th.setAttribute = jsObject.list[i].clouds.dt_txt;

                image.setAttribute('https://openweathermap.org/img/w/', jsObject.list[i].weather[0].icon);

                td.setAttribute = jsObject.list[i].main.temp + ' &#176;F';

                card.appendChild(table);

                card.appendChild(thead);

                card.appendChild(caption);

                card.appendChild(tbody);

                card.appendChild(tr);

                card.appendChild(th);

                card.appendChild(tr);

                card.appendChild(image);

                card.appendChild(tr);

                card.appendChild(td);

                document.querySelector('div.cards').appendChild(card);*/
            }
        }

    });