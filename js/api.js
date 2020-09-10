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

    let searshInput = document.querySelector('#searchId');
    searshInput.placeholder = currentLang[12][0];

    

    let searshBtn = document.querySelector('#searchBtnId');
    searshBtn.value = currentLang[11][0];


    let descrPanel = document.querySelector('#testPanelId');
    while (descrPanel.firstChild) {
        descrPanel.removeChild(descrPanel.firstChild);
    }

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
    let lat = document.querySelector('#geoMapLatId');

    lat.innerText = currentLang[7][0] + ': ';
    lat.appendChild(convertDMS(o.lat, true));

    let lon = document.querySelector('#geoMapLonId');
    lon.innerText = currentLang[7][1] + ': ';
    lon.appendChild(convertDMS(o.lon, false));
    getWeather();
    getMap(o.lat, o.lon);
}

function toDegreesMinutesAndSeconds(coordinate) {
    let dms = document.createElement('span');

    let deg = document.createElement('span');
    deg.className = 'grad';
    let mint = document.createElement('span');
    let scd = document.createElement('span');

    let absolute = Math.abs(coordinate);
    let degrees = Math.floor(absolute);
    let minutesNotTruncated = (absolute - degrees) * 60;
    let minutes = Math.floor(minutesNotTruncated);
    let seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    deg.innerText = degrees;
    mint.innerText = minutes + "' ";
    scd.innerText = seconds + '"';

    dms.appendChild(deg);
    dms.appendChild(mint);
    dms.appendChild(scd);
    return dms;
}

function convertDMS(entity, isLatityde) {
    let convertedValue = toDegreesMinutesAndSeconds(entity);

    let latitudeCardinal = '';
    if (isLatityde) {
        latitudeCardinal = entity >= 0 ? "N" : "S";
    } else {
        latitudeCardinal = entity >= 0 ? "E" : "W";
    }

    let dms = document.createElement('span');

    dms.appendChild(convertedValue);

    let latCardinal = document.createElement('span');
    latCardinal.innerText = " " + latitudeCardinal;
    dms.appendChild(latCardinal);

    return dms; 
}

function exctractWeatherData(o) {
    data = [];
    let hours = [6, 12, 21];

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
    });

    let todayDataPanel = document.querySelector('#todayDataPanelId');
    let todayDatah2Id = document.querySelector('#testPanelId'); 


    let todayImg = document.querySelector('#imgsId');
    todayImg.src = currentTimeObj.icon;

    let discrPanel = document.createElement('span');
    let discrPanel1 = document.createElement('span');
    let discrPanel2 = document.createElement('span');
    let discrPanel3 = document.createElement('span');
    
    if (termoFarengeit) {
        todayDataPanel.innerText = /*String(*/(currentTimeObj.temp + 49).toFixed(0)/*).padStart(4, '0')*/ + ' F';
        discrPanel1.innerText = currentLang[6][0] + ': ' + currentTimeObj.humidity + '% ';
        discrPanel2.classList.add('grad');
        discrPanel2.innerText = currentLang[6][2] + ': ' + (currentTimeObj.feels_like + 49).toFixed(0) + 'F';
        discrPanel3.innerText = currentLang[6][3] + ': ' + currentTimeObj.description + ' ' + currentLang[6][1] + ': ' + currentTimeObj.wind;
    }
    else {
        todayDataPanel.innerText = /*String(*/currentTimeObj.temp.toFixed(0)/*).padStart(4, '0')*/ + ' C';
        discrPanel1.innerText = currentLang[6][0] + ': ' + currentTimeObj.humidity + '% ';
        discrPanel2.classList.add('grad');
        discrPanel2.innerText = currentLang[6][2] + ': ' + currentTimeObj.feels_like.toFixed(0) + 'C';
        discrPanel3.innerText = currentLang[6][3] + ': ' + currentTimeObj.description + ' ' + currentLang[6][1] + ': ' + currentTimeObj.wind;
    }

    discrPanel.appendChild(discrPanel1);
    discrPanel.appendChild(discrPanel2);
    discrPanel.appendChild(discrPanel3);
    todayDatah2Id.appendChild(discrPanel);

    let indexDay = currentTimeObj.dt;
    let indexD = currentTimeObj.time.valueOf();

    let targetControll;
    let ind = 0;
    data.forEach(function (item, i, arr) {
        let dayTag = document.querySelector('#DayPanelId' + ind);
        let dayImg = document.querySelector('#DayPanelimgsId' + ind);
                  
        if (indexDay !== item.dt) {
            if (indexD < item.time.valueOf()) {

                ind++;
                indexDay = item.dt;
                indexD = item.time.valueOf();

                let title = document.querySelector('#DayPanelTitleId' + ind);
                if (title) {
                    title.innerText = currentLang[2][item.time.getDay()] + ' ' +
                        String(item.time.getDate()).padStart(2, '0') + ' ' +
                        currentLang[3][item.time.getMonth()];
                    targetControll = title;
                }
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

                let addDescr = 'additional-description-m';

                partOfDay.innerText = currentLang[9][0];
                if (item.time.getHours() >= 21) {
                    partOfDay.innerText = currentLang[9][2];
                    addDescr = 'additional-description-e';
                } else if (item.time.getHours() >= 12) {
                    partOfDay.innerText = currentLang[9][1];
                    addDescr = 'additional-description-n';
                }
             
                subLocalRecordDay.className = 'grad';

                if (termoFarengeit) {
                    subLocalRecordDay.innerHTML =
                        (item.temp + 49).toFixed(0) + ' F'; 
                } else {
                    subLocalRecordDay.innerHTML = item.temp.toFixed(0) + ' C';
                }

                let subLocalRecordDayDetails = document.createElement('span');
                subLocalRecordDayDetails.className = addDescr;
                subLocalRecordDayDetails.innerText = currentLang[6][0] + ': ' + item.humidity + '%, ' +
                   item.description + ', ' + currentLang[6][1] + ': ' + item.wind;

                subLocalRecordDayImg.src = item.icon;

                partOfDay.appendChild(subLocalRecordDayImg);
                partOfDay.appendChild(subLocalRecordDay);

                localRecordDay.appendChild(partOfDay);
                localRecordDay.appendChild(subLocalRecordDayDetails);
                if (targetControll) {
                    targetControll.appendChild(localRecordDay);
                }

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
    let fotoEndpoint = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=8LlqHU-Qjql04HjpkMQtnr2JazbkwvUB2t83kIeMow0';
    let xhrFoto = new XMLHttpRequest();

    xhrFoto.onreadystatechange = function (data) {
        if (this.readyState === 4 && this.status === 200 && this.responseText) {
            var response = JSON.parse(this.responseText);
            const weatherBody = document.querySelector('#weatherBodyId');
            weatherBody.background = response.urls.small; //full;
        }
    };
    xhrFoto.open('GET', fotoEndpoint, true);

    xhrFoto.send();
}

function getWeather() {
    let weathrEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&lang=' + currentLang[0] + '&units=metric&APPID=247d704aaa926248583db53c5abfad51';
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
    let endpoint = 'http://ip-api.com/json/?fields=country,countryCode,city,lat,lon&lang=' + currentLang[0]; 

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
    let endpoint = 'http://ip-api.com/json/?fields=country,countryCode,city,lat,lon&lang=' + currentLang[0]; 

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
        let selectLang = document.querySelector('#languageSelId');
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
