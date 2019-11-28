const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let h5 = document.createElement('h5');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;

            h4.textContent = towns[i].motto;

            p.textContent = 'Year Founded: ' + towns[i].yearFounded;

            p1.textContent = 'Population: ' + towns[i].currentPopulation;

            p2.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

            h5.textContent = 'Local Events: ' + towns[i].events;

            image.setAttribute('src', 'images/'+towns[i].photo);

            card.appendChild(h2);

            card.appendChild(h4);

            card.appendChild(p);

            card.appendChild(p1);

            card.appendChild(p2);

            card.appendChild(h5);

            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
            }
            
        }
    });