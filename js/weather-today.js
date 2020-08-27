
function GetCurrentDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let mnth = now.getMonth();
    
    let date = now.getDate();
    
    let hr = now.getHours();
    let mn = now.getMinutes();
    let s = now.getSeconds();
    
    let dayOfWeek = now.getDay();

    let timePanel = document.querySelector('#timerId');
    timePanel.innerText = currentLang[2][dayOfWeek-1] + ' ' + date + ' ' + currentLang[3][mnth] + ' ' + hr + ':' + mn + ':' + s;
}

function controlWeatherTodayLoad() {
    getGeoData();

    let weatherToday = document.createElement('div');
    weatherToday.className = '';
    weatherToday.id = 'weatherTodayId';
        
    let weatherTodayHeader = document.createElement('h2');
    weatherTodayHeader.innerText = '2. Weather today';
    weatherTodayHeader.id = 'weatherTodayId';
          
    weatherToday.appendChild(weatherTodayHeader);

    let container = document.createElement('div');
    container.id = 'weatherTodayPanelId';
    container.className = 'widget-part';

    let locationPanel = document.createElement('div');
    locationPanel.id = 'locationPanelId';
    locationPanel.className = 'widget-part-location';

    let timer = document.createElement('div');
    timer.id = 'timerId';
    timer.className = 'widget-part-weather-today';
    timer.innerText = '';
  
    let todayDataPanel = document.createElement('div');
    todayDataPanel.innerText = '';
    todayDataPanel.id = 'todayDataPanelId';

    let todayDatah2 = document.createElement('h2');
    todayDatah2.innerText = '';
    todayDatah2.id = 'todayDatah2Id';
    todayDataPanel.appendChild(todayDatah2);
    //container.appendChild(locationPanel);
    container.appendChild(todayDataPanel);

    weatherToday.appendChild(timer);
    weatherToday.appendChild(locationPanel);
    weatherToday.appendChild(container);    

    return weatherToday;
}

//2. Погода за сегодня
//название населённого пункта, название страны
//текущая дата: день недели в коротком формате, число, месяц.Например: Сб 26 октября
//время: часы, минуты, секунды.Например: 17: 23: 12. Обновляется раз в секунду
//температура в текущий промежуток времени
//описание погоды(summary), ощущаемая температура(apparent temperature), скорость ветра(м / с), влажность(%)
//иконка погоды


