const languages = [
    ['en', 'en_EN',
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    ],
    ['ru', 'ru_RU',
        ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
        ['Воск', 'Пон', 'Вт', 'Ср', 'Чет', 'Пят', 'Суб']
    ],
    ['be', 'be_BE',
        ['Нядзеля','Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'],
        ['студзень', 'лютага', 'сакавік', 'красавік', 'Май', 'Чэрвень', 'ліпеня', 'жнівень', 'верасень', 'кастрычніка', 'лістапада', 'снежні'],
        ['студз', 'люта', 'сакав', 'крас', 'Май', 'Чэрв', 'ліп', 'жні', 'вер', 'каст', 'ліст', 'снеж'],
        ['Няд','Пан', 'Аўт', 'Сер', 'Чац', 'Пят', 'Суб']
    ]
    ];

let termoFarengeit = false;
let currentLang = languages[0];

function refreshClick(e) {
    controlbackgroundPictures();
    getGeoData();
}

function termoClick(e) {
    termoFarengeit = !termoFarengeit;
    getGeoData();
}

function changeLanguageClick(e) {
    currentLang = languages[e.target.selectedIndex];
    getGeoData();
}

function controlBlockLoad() {
    let block = document.createElement('div');
    block.className = '';
    block.id = 'blockId';

    let blockHeader = document.createElement('h2');
    blockHeader.innerText = '1. Block controll';
    block.appendChild(blockHeader);

    let blockGroupButton = document.createElement('div');
    blockGroupButton.className = 'widget-part';
    blockGroupButton.id = 'blockGroupButtonId';

    let refresh = document.createElement('input');
    refresh.className = 'refresh';
    refresh.id = 'refreshId';
    refresh.type = 'button';
    refresh.value = 'refresh';
    refresh.addEventListener('click', refreshClick);
    
    let language = document.createElement('input');
    language.className = 'language';
    language.id = 'languageId';

    let languageSel = document.createElement('select');
    languageSel.className = 'languageSel';
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

    let search = document.createElement('input');
    search.className = 'search';
    search.id = 'searchId';

    blockGroupButton.appendChild(refresh);
    blockGroupButton.appendChild(language);
    blockGroupButton.appendChild(languageSel);
    blockGroupButton.appendChild(gradsWrapperControlBlock);
    blockGroupButton.appendChild(search);
    block.appendChild(blockGroupButton);

    return block;
}
//window.onload = pageLoad;

//1. Блок контроля
//кнопка для переключения фонового изображения
//кнопка для переключения языка(en / ru / be)
//кнопка для переключения единиц измерения температуры(°C /°F)
//строка поиска


