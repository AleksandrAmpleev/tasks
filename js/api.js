let country = '';
let city = '';
let countryCode = '';
let latityde = '';
let longityde = '';
let data = [];

function exctractGeoData(o) {
    city = o.city;
    country = o.country;
    countryCode = o.countryCode;
    latityde = o.lat;
    longityde = o.lon;

    let weatherTodayPanel = document.querySelector('#locationPanelId');
    weatherTodayPanel.innerText = o.city + ', ' + o.country;

    for (var i = 1; i <= 3; i++) {
        let forRemove = document.querySelector('#DayPanelId' + i);
        while (forRemove.firstChild) {
            forRemove.removeChild(forRemove.firstChild);
        }
    }

    let forRemoveMap = document.querySelector('#yandexmap');
    while (forRemoveMap.firstChild) {
        forRemoveMap.removeChild(forRemoveMap.firstChild);
    }
    
    getWeather();
    getMap(o.lat, o.lon);
}

function exctractWeatherData(o) {
    data = [];
    let todayDatah2Id = document.querySelector('#weatherTodayPanelId');
    let currentTimeObj = '';
    let nowTime = new Date();

    o.list.forEach(function (item, i, arr) {
        let d = new Date(item.dt_txt);
        
        let year = d.getFullYear();
        let mnth = d.getMonth();
        let dat = d.getDate();

        let t = {
            id: i,
            description: item.weather[0].description,
            wind: item.wind.speed,
            pressure: item.main.pressure,
            temp: item.main.temp,
            humidity: item.main.humidity,
            feels_like: item.main.feels_like,
            time: d,
            timeStr: item.dt_txt,
            dt: dat.toString() + '-' + mnth + '-' + year
        };

        if ((d - nowTime) < 0) {
            currentTimeObj = t;
        }

        data.push(t);
    });

    if (termoFarengeit) {
        todayDatah2Id.innerText = ' t = ' + (currentTimeObj.temp + 49).toString() + '°F, vl = ' + currentTimeObj.humidity + '%, î =' + (currentTimeObj.feels_like + 49).toString() + '°F, desc = ' + currentTimeObj.description + ', w = ' + currentTimeObj.wind;
    } 
    else {
        todayDatah2Id.innerText = ' t = ' + currentTimeObj.temp + '°C, vl = ' + currentTimeObj.humidity + '%, î =' + currentTimeObj.feels_like + '°C, desc = ' + currentTimeObj.description + ', w = ' + currentTimeObj.wind;
    }        

    let indexDay = currentTimeObj.dt;
    let ind = 0;
    data.forEach(function (item, i, arr) {
        let dayTag = document.querySelector('#DayPanelId' + ind);

        if (indexDay !== item.dt) {
            ind++;
            indexDay = item.dt;
        } else {
            if (dayTag) {
                let localRecordDay = document.createElement('div');

                if (termoFarengeit) {
                    localRecordDay.innerText = currentLang[5][item.time.getDay()] + ' ' + item.time.getDate() + ' ' + currentLang[4][item.time.getMonth()] + ' ' + item.time.getHours() + ':' + item.time.getMinutes() + ' ' + (item.temp + 49).toString() + '°F, ' + item.humidity + '%, ' + ' ' + item.description;
                } else {
                    localRecordDay.innerText = currentLang[5][item.time.getDay()] + ' ' + item.time.getDate() + ' ' + currentLang[4][item.time.getMonth()] + ' ' + item.time.getHours() + ':' + item.time.getMinutes() + ' ' + item.temp + '°C, ' + item.humidity + '%, ' + ' ' + item.description;
                }

                
                dayTag.appendChild(localRecordDay);
            }
        }

        
    });
}


function exctractMapData(o) {
}

function getFoto() {
    let fotoEndpoint = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
    let xhrFoto = new XMLHttpRequest();

    xhrFoto.onreadystatechange = function (data) {
        if (this.readyState === 4 && this.status === 200 && this.responseText) {
            var response = JSON.parse(this.responseText);
            const weatherBody = document.querySelector('#weatherBodyId');
            weatherBody.background = response.urls.full; //small; //full;
        }
    };
    xhrFoto.open('GET', fotoEndpoint, true);

    xhrFoto.send();
}

function getWeather() {
    let weathrEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&lang=' + currentLang[0] + '&units=metric&APPID=247d704aaa926248583db53c5abfad51'; //'https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ua&units=metric&APPID=247d704aaa926248583db53c5abfad51'; //'https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27';
    let xhrWeathr = new XMLHttpRequest();

    xhrWeathr.onreadystatechange = function (data) {
        if (this.readyState === 4 && this.status === 200 && this.responseText) {
            var response = JSON.parse(this.responseText);
            exctractWeatherData(response);
        }
    };
    xhrWeathr.open('GET', weathrEndpoint, true);

    xhrWeathr.send();
}

function getMap(lat, lon) {

    function initMap() {
        map = new ymaps.Map("yandexmap", {
            center: [lat, lon],
            zoom: 10
        });
    }
    ymaps.ready(initMap);
}

function getGeoData() {
    let endpoint = 'http://ip-api.com/json/?fields=country,countryCode,city,lat,lon&lang=' + currentLang[0]; //+ '&callback=exctractGeoData';

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (data) {
        if (this.readyState === 4 && this.status === 200 && this.responseText) {
            var response = JSON.parse(this.responseText);
            exctractGeoData(response);
        }
    };
    xhr.open('GET', endpoint, true);
    xhr.send();
}

function pageLoad() {
    getGeoData();    
}

window.onload = pageLoad;
