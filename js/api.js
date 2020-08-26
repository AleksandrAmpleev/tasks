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

    let weatherTodayPanel = document.querySelector('#weatherTodayPanelId');
    weatherTodayPanel.innerText = o.city + ', ' + o.country;

    getWeather();
}

function exctractWeatherData(o) {
    data = [];
    let todayDatah2Id = document.querySelector('#todayDatah2Id');
    let currentTimeObj = '';
    let nowTime = new Date();

    o.list.forEach(function (item, i, arr) {
        let d = new Date(item.dt_txt);

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
            dt: d.getDay().toString() + '-' + d.getMonth() + '-' + d.getFullYear()
        };

        if ((d - nowTime)<0) {
            currentTimeObj = t;
        }

        data.push(t);
    });


    todayDatah2Id.innerText = 'temperatura = ' + currentTimeObj.temp + '°C, vlajnost = ' + currentTimeObj.humidity + '%, jchucheniya =' + currentTimeObj.feels_like + '°C, desc = ' + currentTimeObj.description + ', wind = ' + currentTimeObj.wind;

    let indexDay = '';
    let ind = 0;
    data.forEach(function (item, i, arr) {
        let dayTag = document.querySelector('#DayPanelId' + ind);

        if (indexDay !== item.dt) {
            ind++;
            indexDay = item.dt;
        }
        
        if (dayTag) {
            let localRecordDay = document.createElement('div');
            localRecordDay.innerText = '' + item.timeStr + ': temperatura = ' + item.temp + '°C, vlajnost = ' + item.humidity + '%, jchucheniya =' + item.feels_like + '°C, desc = ' + item.description + ', wind = ' + item.wind;
            dayTag.appendChild(localRecordDay);
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
    let weathrEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&lang=' + countryCode.toLocaleLowerCase() + '&units=metric&APPID=247d704aaa926248583db53c5abfad51'; //'https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ua&units=metric&APPID=247d704aaa926248583db53c5abfad51'; //'https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27';
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

function getGeoData() {
    let endpoint = 'http://ip-api.com/json/?fields=country,countryCode,city,lat,lon&lang=' + currentLang[0]; //+ '&callback=exctractGeoData';

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (data) {
        if (this.readyState === 4 && this.status === 200 && this.responseText) {
            var response = JSON.parse(this.responseText);
            // let response = JSON.stringify(this.responseText);
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
