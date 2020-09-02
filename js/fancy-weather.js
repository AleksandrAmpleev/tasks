
const weather = document.querySelector('#fancyWeatherId');
const weatherBody = document.querySelector('#weatherBodyId');

let curentPictureIndex = -1;

function pageLoad() {
    controlbackgroundPictures();
    let weatherMain = document.createElement('div');
    weatherMain.className = 'widget';
    weatherMain.appendChild(controlBlockLoad());
    weatherMain.appendChild(controlWeatherTodayLoad());
    weatherMain.appendChild(controlWeather3DaysLoad());
    weatherMain.appendChild(controlGeoLoad());
    weather.appendChild(weatherMain);   

    
    setInterval(GetCurrentDateTime, 1000);
    //pageEndLoad();    



//var arr = [
//    { "name": "Вася", "age": 20 },
//    { "name": "Петя", "age": 22 },
//    { "name": "Таня", "age": 18 }
//];
//Сохранение делается так

//localStorage.setItem("myKey", JSON.stringify(arr));
//Извлечение

//var arr = JSON.parse(localStorage.getItem("myKey"));
}

function pageEndLoad() {
    //let spinner = document.querySelector('#loaderId');
    //spinner.style.display = 'none';
    //controlbackgroundPictures();
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

