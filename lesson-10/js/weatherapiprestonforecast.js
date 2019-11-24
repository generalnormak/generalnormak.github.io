const forecastapiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f7e1535536fec9ae94ea8cdcf72b6ab2";
fetch(forecastapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject);
                for (let i = 0; i < jsObject.list.length; i++) {
                    if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                        console.log(jsObject.list[i].dt_txt);
                        let card = document.createElement('section');
                        let table = document.createElement('table');
                        let thead = document.createElement('thead');
                        let caption = document.createElement('caption');
                        let tbody = document.createElement('tbody');
                        let tr = document.createElement('tr');
                        let th = document.createElement('th');
                        let td = document.createElement('td');
            
                        caption.textContent = '5 Day Forcast';

                        th.setAttribute = jsObject.list[i].clouds.dt_txt;

                        td.setAttribute = jsObject.list[i].weather[0].icon + jsObject.list[i].main.temp + ' &#176;F';

                        card.appendChild(table);

                        card.appendChild(thead);

                        card.appendChild(caption);
                        
                        card.appendChild(tbody);

                        card.appendChild(tr);
            
                        card.appendChild(th);

                        card.appendChild(tr);
            
                        card.appendChild(td);
            
                        document.querySelector('div.cards').appendChild(card);
                    }
                }

            });