
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
        
    //let weatherTodayHeader = document.createElement('h2');
    //weatherTodayHeader.innerText = '2. Weather today';
    //weatherTodayHeader.id = 'weatherTodayId';
          
    //weatherToday.appendChild(weatherTodayHeader);



    //////////////////let locationPanel = document.createElement('div');
    //////////////////locationPanel.id = 'locationPanelId';
    //////////////////locationPanel.className = 'widget-part-location';






  

    return weatherToday;
}

//2. Погода за сегодня
//название населённого пункта, название страны
//текущая дата: день недели в коротком формате, число, месяц.Например: Сб 26 октября
//время: часы, минуты, секунды.Например: 17: 23: 12. Обновляется раз в секунду
//температура в текущий промежуток времени
//описание погоды(summary), ощущаемая температура(apparent temperature), скорость ветра(м / с), влажность(%)
//иконка погоды


