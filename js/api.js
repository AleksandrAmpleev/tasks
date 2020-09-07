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

    let latGrad = Math.floor(latityde);
    let latMin = (((latityde - latGrad)) * 60);
    let latSec = latMin * 60;


    // let t = convertDMS(latityde, longityde);
    let lat = document.querySelector('#geoMapLatId');
    lat.innerText = currentLang[7][0] + ': ' + convertDMS(o.lat, true); //latityde;

    let lon = document.querySelector('#geoMapLonId');
    lon.innerText = currentLang[7][1] + ': ' + convertDMS(o.lon, false); //longityde;

    //popState();
    getWeather();
    getMap(o.lat, o.lon);
}

function toDegreesMinutesAndSeconds(coordinate) {
    let absolute = Math.abs(coordinate);
    let degrees = Math.floor(absolute);
    let minutesNotTruncated = (absolute - degrees) * 60;
    let minutes = Math.floor(minutesNotTruncated);
    let seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return degrees + "° " + minutes + "' " + seconds + '"';
}

function convertDMS(/*lat, lng*/ entity, isLatityde) {
    let convertedValue = toDegreesMinutesAndSeconds(entity);

    let latitudeCardinal = '';
    if (isLatityde) {
        latitudeCardinal = entity >= 0 ? "N" : "S";
    } else {
        latitudeCardinal = entity >= 0 ? "E" : "W";
    }
    return convertedValue + " " + latitudeCardinal;

    //var longitude = toDegreesMinutesAndSeconds(lng);
    //var longitudeCardinal = lng >= 0 ? "E" : "W";
    //return latitude + " " + latitudeCardinal + "\n" + longitude + " " + longitudeCardinal;
}

function exctractWeatherData(o) {
    data = [];
    let hours = [6, 12, 21];

    let currentTimeObj = '';
    let nowTime = new Date();

    o.list.forEach(function (item, i, arr) {
        let d = new Date(item.dt_txt);

        //if (hours.indexOf(d.getHours()) !== -1) {

            let year = d.getFullYear();
            let mnth = d.getMonth();
            let dat = d.getDate();

            let t = {
                id: i,
                description: item.weather[0].description,
                icon: 'http://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png',
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
      //  }

    });

    let todayDataPanel = document.querySelector('#todayDataPanelId');//'#testPanelId');
    let todayDatah2Id = document.querySelector('#testPanelId'); //'#weatherTodayPanelId');


    let todayImg = document.querySelector('#imgsId');
    todayImg.src = currentTimeObj.icon;

    //imgs.src = './pictures/weatherQuestions.png'; //'D:\src\fancy-weather\pictures';// 'http://openweathermap.org/img/wn/10d@2x.png';
    //imgs.className = 'imgsToday';

    if (termoFarengeit) {
        todayDataPanel.innerText = String((currentTimeObj.temp + 49)).padStart(4, '0') + '° F';
        todayDatah2Id.innerText = currentLang[6][0] + ': ' + currentTimeObj.humidity + '% ' + currentLang[6][2] + ': ' +
            (currentTimeObj.feels_like + 49).toFixed(2) + '° F ' + currentLang[6][3] + ': ' + currentTimeObj.description + ' ' + currentLang[6][1] + ': ' + currentTimeObj.wind;
    }
    else {
        todayDataPanel.innerText = String(currentTimeObj.temp).padStart(4, '0') + '° C';
        todayDatah2Id.innerText = currentLang[6][0] + ': ' + currentTimeObj.humidity + '% ' + currentLang[6][2] + ': ' +
            currentTimeObj.feels_like + '° C ' + currentLang[6][3] + ': ' + currentTimeObj.description + ' ' + currentLang[6][1] + ': ' + currentTimeObj.wind;
    }

    let indexDay = currentTimeObj.dt;
    let ind = 0;
    data.forEach(function (item, i, arr) {
        let dayTag = document.querySelector('#DayPanelId' + ind);
        let dayImg = document.querySelector('#DayPanelimgsId' + ind);

        if (indexDay !== item.dt) {
            ind++;
            indexDay = item.dt;

            let title = document.querySelector('#DayPanelTitleId' + ind);
            if (title) {
                title.innerText = currentLang[2][item.time.getDay()] + ' ' +
                    String(item.time.getDate()).padStart(2, '0') + ' ' +
                    currentLang[3][item.time.getMonth()];
            }

        } else {
            if (dayTag && hours.indexOf(item.time.getHours()) !== -1) {
                let localRecordDay = document.createElement('span');
                localRecordDay.className = 'localRecorDay';
                let subLocalRecordDayImg = document.createElement('img');
                subLocalRecordDayImg.className = 'imgs3Day';

                let subLocalRecordDay = document.createElement('span');

                let partOfDay = document.createElement('span');
                partOfDay.className = 'partOfDay';
                partOfDay.innerText = currentLang[9][0];
                if (item.time.getHours() >= 21) {
                    partOfDay.innerText = currentLang[9][2];
                } else if (item.time.getHours() >= 12) {
                    partOfDay.innerText = currentLang[9][1];
                }
                //if (item.time.getHours() <== hours[])

                if (termoFarengeit) {
                    subLocalRecordDay.innerText =
                        //String(item.time.getHours()).padStart(2, '0') + ':' + String(item.time.getMinutes()).padStart(2, '0') +
                        //partOfDay + ' ' +
                        (item.temp + 49).toFixed(2) + '° F, ' + currentLang[6][0] + ': ' + item.humidity + '%, '; //+
                        //currentLang[6][3] + ': ' + item.description + ', ' + currentLang[6][1] + ': ' + item.wind;
                } else {
                    subLocalRecordDay.innerText =
                        //String(item.time.getHours()).padStart(2, '0') + ':' + String(item.time.getMinutes()).padStart(2, '0') +
                        //partOfDay + ' ' +
                        item.temp.toFixed(2) + '° C, ';
                }

                let subLocalRecordDayDepails = document.createElement('span');
                subLocalRecordDayDepails.innerText = currentLang[6][0] + ': ' + item.humidity + '%, ' +
                   /* currentLang[6][3] + ': ' + */ item.description + ', ' + currentLang[6][1] + ': ' + item.wind;

                subLocalRecordDayImg.src = item.icon;
                localRecordDay.appendChild(partOfDay);
                localRecordDay.appendChild(subLocalRecordDayImg);
                localRecordDay.appendChild(subLocalRecordDay);
                localRecordDay.appendChild(subLocalRecordDayDepails);
                dayTag.appendChild(localRecordDay);
            }
        }
    });


    let block = document.querySelector('#blockId');
    let weather3d = document.querySelector('#weather3dId');

    let tmr = document.querySelector('#timerId');
    block.appendChild(tmr);
    block.appendChild(weather3d);

    let weatherToday = document.querySelector('#weatherTodayId');
    let geo = document.querySelector('#geoId');
    weatherToday.appendChild(geo);
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
    //let weathrEndpoint = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=7&applid=247d704aaa926248583db53c5abfad51";
    // let weathrEndpoint ='https://api.openweathermap.org/data/2.5/forecast/daily?q=' + 'Saratov' + /*'&lang=' + currentLang[0] + */'&cnt=3&appid=247d704aaa926248583db53c5abfad51';//'https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1';// 'https://samples.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=b1b15e88fa797225412429c1c50c122a1';
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


function getGeoDataSearch() {
    //popState();

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

function getGeoData() {
    //popState();

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

function popState() {
    let currentLangFromStorage = localStorage.getItem("currentLang");
    let termoFarengeitStorage = localStorage.getItem("termoFarengeit");

    if (currentLangFromStorage) {
        currentLang = JSON.parse(currentLangFromStorage);
        //
        let selectLang = document.querySelector('#languageSelId');
        //selectLang.value = currentLang[0];

    }

    if (termoFarengeitStorage) {
        termoFarengeit = JSON.parse(termoFarengeitStorage);
    }
}

function pushState() {
    localStorage.setItem("currentLang", JSON.stringify(currentLang));
    localStorage.setItem("termoFarengeit", JSON.stringify(termoFarengeit));
}

function pageLoad() {

    getGeoData();
}

window.onload = pageLoad;
