

function controlGeoLoad() {
    let geo = document.createElement('div');
    geo.className = '';
    geo.id = 'geoId';

    let geoSearch = document.createElement('div');
    geoSearch.className = '';
    geoSearch.id = 'geoSearchId';




    let search = document.createElement('input');
    search.className = 'input-weather';
    search.id = 'searchId';
    search.value = '';
    search.type = "search";
    search.placeholder = 'type for find sity';
    search.addEventListener('keydown', keyDownSearhInput);

    let searchBtn = document.createElement('input');
    searchBtn.className = 'button-weather';
    searchBtn.id = 'searchBtnId';
    searchBtn.type = 'button';
    searchBtn.value = 'SEARCH';

    searchBtn.addEventListener('click', searchClick);

    //let grLeft = document.createElement('div');
    //grLeft.className = 'grRoup';
    //grLeft.appendChild(refresh);
    //grLeft.appendChild(languageSel);
    //grLeft.appendChild(gradsWrapperControlBlock);

    let grRight = document.createElement('div');
    grRight.className = 'widget-part-group';
    grRight.appendChild(search);
    grRight.appendChild(searchBtn);

    geoSearch.appendChild(grRight);
    geo.appendChild(geoSearch);

    //geo.className = ' widget';

    //let geoHeader = document.createElement('h2');
    //geoHeader.innerText = '4. Geo';
    //geo.appendChild(geoHeader);

    let geoMap = document.createElement('div');
    geoMap.innerText = '';
    geoMap.id = 'geoMapId';
    //geo.appendChild(geoMap);

    let geoMapY = document.createElement('div');
    geoMapY.className = 'widget-part';
    geoMapY.id = 'yandexmap';
    geoMapY.style = "width: 500px; height: 500px";
    geo.appendChild(geoMapY);

    let geoMapCoord = document.createElement('div');
    geoMapCoord.innerText = '';
    geoMapCoord.className = 'widget-part-cord';
    geoMapCoord.id = 'geoMapCoordId';

    let geoMapLat = document.createElement('div');
    geoMapLat.innerText = '';
    geoMapLat.className = 'widget-part-cord';
    geoMapLat.id = 'geoMapLatId';

    let geoMapLon = document.createElement('div');
    geoMapLon.innerText = '';
    geoMapLon.className = 'widget-part-cord';
    geoMapLon.id = 'geoMapLonId';
    geoMapCoord.appendChild(geoMapLat);
    geoMapCoord.appendChild(geoMapLon);

    geo.appendChild(geoMapCoord);
    
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

