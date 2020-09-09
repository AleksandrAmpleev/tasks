
const weather = document.querySelector('#fancyWeatherId');
const weatherBody = document.querySelector('#weatherBodyId');

let curentPictureIndex = -1;


function GetCurrentDateTime() {
    let now = new Date();
    let mnth = now.getMonth();

    let date = now.getDate();

    let hr = now.getHours();
    let mn = now.getMinutes();
    let s = now.getSeconds();

    let dayOfWeek = now.getDay();

    let timePanel = document.querySelector('#timerId');
    timePanel.innerText = currentLang[8][0] + ': ' + currentLang[2][dayOfWeek] + ' ' + String(date).padStart(2, '0') + ' ' + currentLang[3][mnth] + ' ' + String(hr).padStart(2, '0') + ':' + String(mn).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function controlWeatherTodayLoad() {
    getGeoData();

    let weatherToday = document.createElement('div');
    weatherToday.className = '';
    weatherToday.id = 'weatherTodayId';
    return weatherToday;
}



function pageLoad() {
    getFoto(weatherBody.background);
    let weatherMain = document.createElement('div');
    weatherMain.className = 'widget';
    weatherMain.id = 'weatherMainId';

    let subWeatherMain = document.createElement('div');
    subWeatherMain.className = 'widgetSubWeatherMain';
    subWeatherMain.appendChild(controlBlockLoad());
    subWeatherMain.appendChild(controlWeatherTodayLoad());
 

    weatherMain.appendChild(subWeatherMain);
    weatherMain.appendChild(controlWeather3DaysLoad());
    weatherMain.appendChild(controlGeoLoad());
    weather.appendChild(weatherMain);   
        
    setInterval(GetCurrentDateTime, 1000);
}

function pageEndLoad() {
}

window.onload = pageLoad;
//window.onloadend = pageEndLoad;

//1. Блок контроля
//кнопка для переключения фонового изображения
//кнопка для переключения языка(en / ru / be)
//кнопка для переключения единиц измерения температуры(°C /°F)
//строка поиска
//2. Погода за сегодня
//название населённого пункта, название страны
//текущая дата: день недели в коротком формате, число, месяц.Например: Сб 26 октября
//время: часы, минуты, секунды.Например: 17: 23: 12. Обновляется раз в секунду
//температура в текущий промежуток времени
//описание погоды(summary), ощущаемая температура(apparent temperature), скорость ветра(м / с), влажность(%)
//иконка погоды
//3. Прогноз погоды на три дня
//день недели в полном формате
//средняя температура
//иконка погоды
//4. Геолокационные данные
