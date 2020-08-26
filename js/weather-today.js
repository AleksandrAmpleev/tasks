//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}//247d704aaa926248583db53c5abfad51

function GetCurrentDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    //Получить год(из 4 цифр)
    let mnth = now.getMonth();
    //Получить месяц, от 0 до 11.
    let date = now.getDate();
    //Получить число месяца, от 1 до 31.
    let hr = now.getHours();
    let mn = now.getMinutes();
    //Получить соответствующие компоненты.
    //Не getYear(), а getFullYear()
    //Некоторые браузеры реализуют нестандартный метод getYear().Где - то он возвращает только две цифры из года, где - то четыре.Так или иначе, этот метод отсутствует в стандарте JavaScript.Не используйте его.Для получения года есть getFullYear().

    //Дополнительно можно получить день недели:
    let dayOfWeek = now.getDay();

    return dayOfWeek + ' ' + date + ' ' + mnth + ' ' + hr + ':' + mn;
}

function controlWeatherTodayLoad() {
    getGeoData();

    let weatherToday = document.createElement('div');
    weatherToday.className = 'weatherToday';
    weatherToday.id = 'weatherTodayId';
        
    let weatherTodayHeader = document.createElement('h2');
    weatherTodayHeader.innerText = '2. Weather today';
    weatherTodayHeader.id = 'weatherTodayId';

    let weatherTodayPanel = document.createElement('div');
    weatherTodayPanel.innerText = '';
    weatherTodayPanel.id = 'weatherTodayPanelId';
    weatherTodayHeader.appendChild(weatherTodayPanel);
    
    let currentDateTime = document.createElement('h3');
    currentDateTime.innerText = GetCurrentDateTime();
    currentDateTime.id = 'currentDateTimeId';

    let todayDataPanel = document.createElement('div');
    todayDataPanel.innerText = '';
    todayDataPanel.id = 'todayDataPanelId';

    let todayDatah2 = document.createElement('h2');
    todayDatah2.innerText = '';
    todayDatah2.id = 'todayDatah2Id';
    todayDataPanel.appendChild(todayDatah2);
    
    weatherToday.appendChild(weatherTodayHeader);
    weatherToday.appendChild(currentDateTime);
    weatherToday.appendChild(todayDataPanel);

    return weatherToday;
}


//2. Погода за сегодня
//название населённого пункта, название страны
//текущая дата: день недели в коротком формате, число, месяц.Например: Сб 26 октября
//время: часы, минуты, секунды.Например: 17: 23: 12. Обновляется раз в секунду
//температура в текущий промежуток времени
//описание погоды(summary), ощущаемая температура(apparent temperature), скорость ветра(м / с), влажность(%)
//иконка погоды


