function loadTextFile() {
    // creating an XMLHttpRequest object:
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "data.txt", true);
    xhr.send();
}

function loadJsonFileFilm() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let films = JSON.parse(xhr.responseText);
            let filmContainer = document.getElementById('demo1');
            filmContainer.innerHTML = '';

            for (let i = 0; i < films.length; i++) {
                let film = films[i];
                for (let key in film) {
                    let paragraph = document.createElement('p');
                    paragraph.textContent = `${key}: ${film[key]}`;
                    filmContainer.appendChild(paragraph);
                }
                filmContainer.appendChild(document.createElement('br')); // Add a line break between films
            }
        }

    }

    xhr.open("GET", "film.json", true);
    xhr.send();
}

function loadJsonFileVoiture() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let voitures = JSON.parse(xhr.responseText);
            let voiture = voitures.voiture; // to access into the parent Node (voiture)

            let filmContainer = document.getElementById('demo2');
            filmContainer.innerHTML = '';

            for (let i = 0; i < voiture.length; i++) {
                let car = voiture[i];

                let carInfo = document.createElement('div');
                carInfo.classList.add('car-info');

                for (let key in car) {
                    carInfo.innerHTML += `<p>${key}: ${car[key]}</p>`;
                }

                filmContainer.appendChild(carInfo);
                filmContainer.appendChild(document.createElement('br')); // Add a line break between cars
            }
        }
    }

    xhr.open("GET", "voiture.json", true);
    xhr.send();
}

function loadXmlFile() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let xmlDoc = xhr.responseXML;
            let films = xmlDoc.getElementsByTagName('CD');
            console.log(films);
            let filmContainer = document.getElementById('demo3');
            filmContainer.innerHTML = ''; // Clear previous content

            for (let i = 0; i < films.length; i++) {
                let film = films[i];
                let title = film.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
                let artist = film.getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue;
                let country = film.getElementsByTagName('COUNTRY')[0].childNodes[0].nodeValue;
                let company = film.getElementsByTagName('COMPANY')[0].childNodes[0].nodeValue;
                let price = film.getElementsByTagName('PRICE')[0].childNodes[0].nodeValue;
                let year = film.getElementsByTagName('YEAR')[0].childNodes[0].nodeValue;

                let filmInfo = document.createElement('div');
                filmInfo.classList.add('film-info');

                let titleParagraph = document.createElement('p');
                titleParagraph.textContent = `Title: ${title}`;
                filmInfo.appendChild(titleParagraph);

                let artistParagraph = document.createElement('p');
                artistParagraph.textContent = `Artist: ${artist}`;
                filmInfo.appendChild(artistParagraph);

                let countryParagraph = document.createElement('p');
                countryParagraph.textContent = `Country: ${country}`;
                filmInfo.appendChild(countryParagraph);

                let companyParagraph = document.createElement('p');
                companyParagraph.textContent = `Company: ${company}`;
                filmInfo.appendChild(companyParagraph);

                let priceParagraph = document.createElement('p');
                priceParagraph.textContent = `Price: ${price}`;
                filmInfo.appendChild(priceParagraph);

                let yearParagraph = document.createElement('p');
                yearParagraph.textContent = `Year: ${year}`;
                filmInfo.appendChild(yearParagraph);

                filmContainer.appendChild(filmInfo);
                filmContainer.appendChild(document.createElement('hr')); // Add a horizontal rule between films
            }
        }
    };

    xhr.open("GET", "cd_catalog.xml", true);
    xhr.send();
}


function printRequestCharacteristics(xhr) {
    console.log(xhr); // dict contains characteristics of xhr request
    console.log(xhr.readyState); // 4
    console.log(xhr.status); // 200
    console.log(xhr.statusText); // OK
    console.log(xhr.response); // content of source
    console.log(xhr.responseText); // content of source
}