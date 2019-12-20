const requestURL = 'https://raw.githubusercontent.com/generalnormak/generalnormak.github.io/master/lesson-13-14/json/temples.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) {


            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let h5 = document.createElement('h5');
            let p = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = temples[i].name;

            h4.textContent = 'Address: ' + temples[i].address;

            h5.textContent = 'Telephone #: ' + temples[i].telephone;

            p.textContent = 'Email: ' + temples[i].email;

            p1.textContent = 'Services: ' + temples[i].services;

            p2.textContent = 'History: ' + temples[i].history;
            
            p3.textContent = 'Ordinance Schedule: ' + temples[i].ordinance;

            p4.textContent = 'Session Times: ' + temples[i].session;

            p5.textContent = 'Closure Times: ' + temples[i].closure;

            image.setAttribute('src', 'images/' + temples[i].image);

            card.appendChild(h2);

            card.appendChild(h4);

            card.appendChild(h5);

            card.appendChild(p);

            card.appendChild(p1);

            card.appendChild(p2);

            card.appendChild(p3);

            card.appendChild(p4);

            card.appendChild(p5);

            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }

    });