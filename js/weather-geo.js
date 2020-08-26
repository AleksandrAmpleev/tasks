

function controlGeoLoad() {
    let geo = document.createElement('div');
    geo.className = 'geo';
    geo.id = 'geoId';
    //geo.className = ' widget';

    let geoHeader = document.createElement('h2');
    geoHeader.innerText = '4. Geo';
    geo.appendChild(geoHeader);

    getGeoData();

    let yandexMap = document.createElement('div');
    yandexMap.className = 'yandexmap';
    yandexMap.id = 'yandexmap';
    yandexMap.style.width = 500;
    yandexMap.style.height = 500;
    geo.appendChild(yandexMap);
    return geo;
}

//4. Геолокационные данные

