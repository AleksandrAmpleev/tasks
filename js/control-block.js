const languages = [['en', 'en_EN'], ['ru', 'ru_RU'], ['be', 'be_BE']];
let termoFarengeit = false; 
let currentLang = languages[0]; 

function refreshClick(e) {
    controlbackgroundPictures();
    getGeoData();
}

function termoClick(e) {
    termoFarengeit = !termoFarengeit;
}

function changeLanguageClick(e) {
    currentLang = languages[e.target.selectedIndex]; 
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

    //for (element in languages) {
    //    let opt = document.createElement("option");
    //    opt.value = index; //index;
    //    opt.innerHTML = element[index];
    //    languageSel.add(opt);
    //    index++;
    //}

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
    //blockGroupButton.appendChild(gradsStreet);
    //blockGroupButton.appendChild(gradsStreetLabel);
    blockGroupButton.appendChild(gradsWrapperControlBlock);
    blockGroupButton.appendChild(search);
    block.appendChild(blockGroupButton);

    //let termo = document.getElementById('slideThree');
    //termo.addEventListener('click', termoClick);
    return block;
}
//<input type="submit" name="send" value="Отправить" />

//window.onload = pageLoad;

//1. Блок контроля
//кнопка для переключения фонового изображения
//кнопка для переключения языка(en / ru / be)
//кнопка для переключения единиц измерения температуры(°C /°F)
//строка поиска


