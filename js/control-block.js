const languages = [
    ['en', 'en_EN',
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['humidity', 'wind', 'feel', 'description'],
        ['latityde', 'longityde'],
        ['Today'],
        ['Morning', 'Noon', 'Night'],
        ['hum.', 'wind', 'feel', 'desc.'],
        ['Search'],
        ['type for find city']
    ],
    ['ru', 'ru_RU',
        ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
        ['Воск', 'Пон', 'Вт', 'Ср', 'Чет', 'Пят', 'Суб'],
        ['влажность', 'ветер', 'ощущения', 'описание'],
        ['широта', 'долгота'],
        ['Сегодня'],
        ['Утро', 'День', 'Вечер'],
        ['вл.', 'ветер', 'ощ.', 'оп.'],
        ['Поиск'],
        ['введите город']
    ],
    ['be', 'be_BE',
        ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'],
        ['студзень', 'лютага', 'сакавік', 'красавік', 'Май', 'Чэрвень', 'ліпеня', 'жнівень', 'верасень', 'кастрычніка', 'лістапада', 'снежні'],
        ['студз', 'люта', 'сакав', 'крас', 'Май', 'Чэрв', 'ліп', 'жні', 'вер', 'каст', 'ліст', 'снеж'],
        ['Няд', 'Пан', 'Аўт', 'Сер', 'Чац', 'Пят', 'Суб'],
        ['вільготнасць', 'вецер', 'адчуванні', 'апісанне'],
        ['шырата', 'даўгата'],
        ['Cёння'],
        ['Раніца', 'Апоўдні', 'Вечар'],
        ['віл', 'вецер', 'адч.', 'апі.'],
        ['Пошук'],
        ['Увядзіце горад']
    ]
];

let termoFarengeit = false;
let currentLang = languages[0];
let currentLangSi = 0;

function refreshClick(e) {
    getFoto();
    getGeoData();
}

function keyDownSearhInput(e) {
    if (e.keyCode === 13) {
        searchClick(e);
    }
}

function searchClick(e) {
    let findControll = document.querySelector('#searchId');
    let findString = findControll.value;
  
    let weathrEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?q=' + findString + '&lang=' + currentLang[0] + '&units=metric&APPID=247d704aaa926248583db53c5abfad51'; 
    let xhrWeathr = new XMLHttpRequest();

    xhrWeathr.onreadystatechange = function (data) {
        if (this.readyState === 4 && this.status === 200 && this.responseText) {
            var response = JSON.parse(this.responseText);
            if (response) {
                let param = {
                    city: response.city.name,
                    country: response.city.country,
                    countryCode: response.city.country,
                    lat: response.city.coord.lat,
                    lon: response.city.coord.lon
                };
                exctractGeoData(param);
            }
        }
        
    };
    xhrWeathr.open('GET', weathrEndpoint, true);
    xhrWeathr.onerror = function(e) {
    };
    
    xhrWeathr.send();
}

function termoClick(e) {
    termoFarengeit = !termoFarengeit;
    pushState();
    getGeoData();
}

function changeLanguageClick(e) {
    if (currentLang[0] !== languages[e.target.selectedIndex][0]) {
        currentLang = languages[e.target.selectedIndex];
        currentLangSi = e.target.selectedIndex;
        pushState();
        getGeoData();
    }
}

function controlBlockLoad() {
    let block = document.createElement('div');
    block.className = '';
    block.id = 'blockId';

    let blockGroupButton = document.createElement('div');
    blockGroupButton.className = 'widget-part-group';
    blockGroupButton.id = 'blockGroupButtonId';

    let refresh = document.createElement('img');
    refresh.className = 'button-weather refresh';
    refresh.id = 'refreshId';
    refresh.type = 'button';
    refresh.src = './pictures/refresh_icon.svg';
    refresh.addEventListener('click', refreshClick);


    let languageSel = document.createElement('select');
    languageSel.className = 'select-weather';
    languageSel.id = 'languageSelId';
    
    languageSel.addEventListener('click', changeLanguageClick);

    for (let i = 0; i < languages.length; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = languages[i][0];
        languageSel.add(opt);
    }

    let gradsWrapperControlBlock = document.createElement('div');
    gradsWrapperControlBlock.className = 'slideThree';
    gradsWrapperControlBlock.id = 'slideThreeId';

    let gradsInputControlBlock = document.createElement('input');
    gradsInputControlBlock.className = 'slideThree';
    gradsInputControlBlock.id = 'slideThree';
    gradsInputControlBlock.name = 'check';
    gradsInputControlBlock.checked = true;
    gradsInputControlBlock.type = 'checkbox';
    gradsInputControlBlock.value = 'None';
    gradsInputControlBlock.addEventListener('click', termoClick);

    let gradsLabelControlBlock = document.createElement('label');
    gradsLabelControlBlock.htmlFor = 'slideThree';

    gradsWrapperControlBlock.appendChild(gradsInputControlBlock);
    gradsWrapperControlBlock.appendChild(gradsLabelControlBlock);

    let grLeft = document.createElement('div');
    grLeft.className = 'grRoup';
    grLeft.appendChild(refresh);
    grLeft.appendChild(languageSel);
    grLeft.appendChild(gradsWrapperControlBlock);

    blockGroupButton.appendChild(refresh);
    blockGroupButton.appendChild(grLeft);
    block.appendChild(blockGroupButton);

    let locationPanel = document.createElement('div');
    locationPanel.id = 'locationPanelId';
    locationPanel.className = 'widget-part-location';
             
    let timer = document.createElement('div');
    timer.id = 'timerId';
    timer.className = 'widget-part-weather-today';
    timer.innerText = '';
          
    let container = document.createElement('div');
    container.id = 'weatherTodayPanelId';
    container.className = 'widget-part-dt';

    let todayDataPanel = document.createElement('span');
    todayDataPanel.innerText = '';
    todayDataPanel.className = 'today-main-temperature';
    todayDataPanel.id = 'todayDataPanelId';

    let imgs = document.createElement('img');
    imgs.id = 'imgsId';
    imgs.src = './pictures/weatherQuestions.png';// 'http://openweathermap.org/img/wn/10d@2x.png';
    imgs.className = 'imgsToday';
    
    let subContainer = document.createElement('div');
    subContainer.id = 'subContainerId';
    subContainer.className = 'widget-part-weather-today-sub-container';

    subContainer.appendChild(timer);

    subContainer.appendChild(imgs);
    subContainer.appendChild(todayDataPanel);

    container.appendChild(subContainer);
    
    let testPanel = document.createElement('div');
    testPanel.innerText = '';
    testPanel.id = 'testPanelId';

    container.appendChild(testPanel);

    block.appendChild(locationPanel);
    block.appendChild(container);


   // popState();

    return block;
}
//window.onload = pageLoad;

//1. Блок контроля
//кнопка для переключения фонового изображения
//кнопка для переключения языка(en / ru / be)
//кнопка для переключения единиц измерения температуры(°C /°F)
//строка поиска


