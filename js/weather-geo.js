

function controlGeoLoad() {
    let geo = document.createElement('div');
    geo.className = '';
    geo.id = 'geoId';
    //geo.className = ' widget';

    let geoHeader = document.createElement('h2');
    geoHeader.innerText = '4. Geo';
    geo.appendChild(geoHeader);

    let geoMap = document.createElement('div');
    geoMap.innerText = '';
    geoMap.id = 'geoMapId';
    //geo.appendChild(geoMap);

    let geoMapY = document.createElement('div');
    geoMapY.className = 'widget-part';
    geoMapY.id = 'yandexmap';
    geoMapY.style = "width: 500px; height: 500px";
    geo.appendChild(geoMapY);



    //<div id="yandexmap" style="width: 500px; height: 500px"></div>

    //getGeoData();

    //let yandexMap = document.createElement('div');
    //yandexMap.className = 'yandexmap';
    //yandexMap.id = 'yandexmap';
    //yandexMap.style.width = 500;
    //yandexMap.style.height = 500;
    //geo.appendChild(yandexMap);
    return geo;
}

//4. Геолокационные данные

