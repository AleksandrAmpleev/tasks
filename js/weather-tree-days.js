
function controlWeather3DaysLoad() {
    let weather3Days = document.createElement('div');
    weather3Days.className = 'weather3d';
    weather3Days.id = 'weather3dId';
    //weather3Days.className = ' widget';

    let weather3DaysHeader = document.createElement('h2');
    weather3DaysHeader.innerText = '3. Weather tree days';
    weather3Days.appendChild(weather3DaysHeader);


    let weather3DaysPanel = document.createElement('div');
    weather3DaysPanel.innerText = '';
    weather3DaysPanel.id = 'weather3DaysPanelId';
    

    let weather3daysSubHeaderh3Id = document.createElement('h3');
    

    let firstDayPanel = document.createElement('div');
    firstDayPanel.innerText = '';
    firstDayPanel.id = 'DayPanelId1';

    let secondDayPanel = document.createElement('div');
    secondDayPanel.innerText = '';
    secondDayPanel.id = 'DayPanelId2';
    

    let threeDayPanel = document.createElement('div');
    threeDayPanel.innerText = '';
    threeDayPanel.id = 'DayPanelId3';

    weather3daysSubHeaderh3Id.appendChild(firstDayPanel);
    weather3daysSubHeaderh3Id.appendChild(secondDayPanel);
    weather3daysSubHeaderh3Id.appendChild(threeDayPanel);


    weather3DaysPanel.appendChild(weather3daysSubHeaderh3Id);


    weather3Days.appendChild(weather3DaysPanel);
 
    return weather3Days;
}

//3. Прогноз погоды на три дня
//день недели в полном формате
//средняя температура
//иконка погоды
