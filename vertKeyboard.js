const arrKeyBoard = [
    [
        { eng: '`', rus: 'ё', upE: '~', upR: 'Ё', keycode: 192, options: { spKey: false } },
        { eng: '1', rus: '1', upE: '!', upR: '!', keycode: 49, options: { spKey: false } },
        { eng: '2', rus: '2', upE: '@', upR: '"', keycode: 50, options: { spKey: false } },
        { eng: '3', rus: '3', upE: '#', upR: '№', keycode: 51, options: { spKey: false } },
        { eng: '4', rus: '4', upE: '$', upR: ';', keycode: 52, options: { spKey: false } },
        { eng: '5', rus: '5', upE: '%', upR: '%', keycode: 53, options: { spKey: false } },
        { eng: '6', rus: '6', upE: '^', upR: ':', keycode: 54, options: { spKey: false } },
        { eng: '7', rus: '7', upE: '&', upR: '?', keycode: 55, options: { spKey: false } },
        { eng: '8', rus: '8', upE: '*', upR: '*', keycode: 56, options: { spKey: false } },
        { eng: '9', rus: '9', upE: '(', upR: '(', keycode: 57, options: { spKey: false } },
        { eng: '0', rus: '0', upE: ')', upR: ')', keycode: 48, options: { spKey: false } },
        { eng: '-', rus: '-', upE: '_', upR: '_', keycode: 189, options: { spKey: false } },
        { eng: '=', rus: '=', upE: '+', upR: '+', keycode: 187, options: { spKey: false } },
        { eng: 'Backspace', rus: 'Backspace', upE: 'Backspace', upR: 'Backspace', keycode: 8, options: { spKey: true } }],
    [
        { eng: 'Tab', rus: 'Tab', upE: 'Tab', upR: 'Tab', keycode: 0,options: { spKey: true } },
        { eng: 'q', rus: 'й', upE: 'Q', upR: 'Й', keycode: 0, options: { spKey: false } },
        { eng: 'w', rus: 'ц', upE: 'W', upR: 'Ц', keycode: 0, options: { spKey: false } },
        { eng: 'e', rus: 'у', upE: 'E', upR: 'У', keycode: 0, options: { spKey: false } },
        { eng: 'r', rus: 'к', upE: 'R', upR: 'К', keycode: 0, options: { spKey: false } },
        { eng: 't', rus: 'е', upE: 'T', upR: 'Е', keycode: 0, options: { spKey: false } },
        { eng: 'y', rus: 'н', upE: 'Y', upR: 'Н', keycode: 0, options: { spKey: false } },
        { eng: 'u', rus: 'г', upE: 'U', upR: 'Г', keycode: 0, options: { spKey: false } },
        { eng: 'i', rus: 'ш', upE: 'I', upR: 'Ш', keycode: 0, options: { spKey: false } },
        { eng: 'o', rus: 'щ', upE: 'O', upR: 'Щ', keycode: 0, options: { spKey: false } },
        { eng: 'p', rus: 'з', upE: 'P', upR: 'З', keycode: 0, options: { spKey: false } },
        { eng: '[', rus: 'х', upE: '{', upR: 'Х', keycode: 0, options: { spKey: false } },
        { eng: ']', rus: 'ъ', upE: '}', upR: 'Ъ', keycode: 0, options: { spKey: false } },
        { eng: '\\', rus: '\\', upE: '|', upR: '/', keycode: 0, options: { spKey: false } },
        { eng: 'Del', rus: 'Del', upE: 'Del', upR: 'Del', keycode: 0, options: { spKey: true } }],
    [
        { eng: 'CapsLock', rus: 'CapsLock', upE: 'CapsLock', upR: 'CapsLock', options: { spKey: true, extStyles: ['capsLockKey'] } },
        { eng: 'a', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 's', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'd', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'f', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'g', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'h', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'j', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'k', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'l', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: ';', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: '\'', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: false } },
        { eng: 'Enter', rus: 'Enter', upE: 'Enter', upR: 'Enter', keycode: 0, options: { spKey: true, extStyles: ['enterKey'] } }],
    [
        { eng: 'Shift', rus: 'Shift', upE: 'Shift', upR: 'Shift', keycode: 0, options: { spKey: true, extStyles: ['shiftKey'] } },
        { eng: 'z', rus: 'я', upE: 'Z', upR: 'Я', keycode: 0, options: { spKey: false } },
        { eng: 'x', rus: 'ч', upE: 'X', upR: 'Ч', keycode: 0, options: { spKey: false } },
        { eng: 'c', rus: 'с', upE: 'C', upR: 'С', keycode: 0, options: { spKey: false } },
        { eng: 'v', rus: 'м', upE: 'V', upR: 'М', keycode: 0, options: { spKey: false } },
        { eng: 'b', rus: 'и', upE: 'B', upR: 'И', keycode: 0, options: { spKey: false } },
        { eng: 'n', rus: 'т', upE: 'N', upR: 'Т', keycode: 0, options: { spKey: false } },
        { eng: 'm', rus: 'ь', upE: 'M', upR: 'Ь', keycode: 0, options: { spKey: false } },
        { eng: ',', rus: 'б', upE: '<', upR: 'Б', keycode: 0, options: { spKey: false } },
        { eng: '.', rus: 'ю', upE: '>', upR: 'Ю', keycode: 0, options: { spKey: false } },
        { eng: '/', rus: '.', upE: '?', upR: ',', keycode: 0, options: { spKey: false } },
        { eng: '↑', rus: '↑', upE: '↑', upR: '↑', keycode: 0, options: { spKey: true } },
        { eng: 'Shift', rus: 'Shift', upE: 'Shift', upR: 'Shift', keycode: 0, options: { spKey: true, extStyles: ['shiftKey'] } }],
    [
        { eng: 'Ctrl', rus: 'Ctrl', upE: 'Ctrl', upR: 'Ctrl', keycode: 0, options: { spKey: true, extStyles: ['ctrlKey'] } },
        { eng: 'Win', rus: 'Win', upE: 'Win', upR: 'Win', keycode: 0, options: { spKey: true } },
        { eng: 'Alt', rus: 'Alt', upE: 'Alt', upR: 'Alt', keycode: 0, options: { spKey: true, extStyles: ['altKey'] } },
        { eng: '', rus: '', upE: '', upR: '', keycode: 0, options: { spKey: true, extStyles: ['spaceKey'] } },
        { eng: 'Alt', rus: 'Alt', upE: 'Alt', upR: 'Alt', keycode: 0, options: { spKey: true, extStyles: ['altKey'] } },
        { eng: '←', rus: '←', upE: '←', upR: '←', keycode: 0, options: { spKey: true } },
        { eng: '↓', rus: '↓', upE: '↓', upR: '↓', keycode: 0, options: { spKey: true } },
        { eng: '→', rus: '→', upE: '→', upR: '→', keycode: 0, options: { spKey: true } },
        { eng: 'Ctrl', rus: 'Ctrl', upE: 'Ctrl', upR: 'Ctrl', keycode: 0, options: { spKey: true, extStyles: ['ctrlKey'] } }]
];

const txtArea = document.querySelector('#textareaId');
const keyboard = document.querySelector('#keyboadId');

function setExtKeyBoardStyles(elem, options) {
    elem.classList.add(options.spKey ? 'sKey' : 'key');
    if (options.extStyles) {
        for (let i = 0; i < options.extStyles.length; i++) {
            elem.classList.add(options.extStyles[i]);
        }
    }
}



function keyClick(e) {
    console.log('Click' + String.fromCharCode(event.charCode));
}

function setListeners() {
    for (let i = 0; i < arrKeyBoard.length; i++) {
        for (let j = 0; j < arrKeyBoard[i].length; j++) {
            let element = document.getElementById('keyEn' + arrKeyBoard[i][j].keycode);
            element.addEventListener('click', keyClick);
            //element.addEventListener('keydown', keyPressDown);
            //element.addEventListener('keyup', keyPressUp);
        }
    }
    addEventListener("keydown", function (e) {
        let element = document.getElementById('keyEn' + e.keyCode);
        if (element) {
            element.classList.toggle('keyPress1');
        }
    });
    addEventListener("keyup", function (e) {
        let element = document.getElementById('keyEn' + e.keyCode);
        if (element) {
            element.classList.toggle('keyPress1');
        }
    });
}

function drawKeyboard() {

    for (var j = 0; j < 5; j++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let i = 0; i < arrKeyBoard[j].length; i++) {
            let newKeySpanEng = document.createElement('span');
            let currentKey = arrKeyBoard[j][i];
            newKeySpanEng.innerHTML = currentKey.eng;
            newKeySpanEng.id = 'keyEn' + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanEng, currentKey.options);
            rowDiv.appendChild(newKeySpanEng);

            let newKeySpanRus = document.createElement('span');
            newKeySpanRus.innerHTML = currentKey.rus;
            newKeySpanRus.id = 'keyRu' + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanRus, currentKey.options);
            newKeySpanRus.classList.add('hidden');
            rowDiv.appendChild(newKeySpanRus);

            let newKeySpanUpE = document.createElement('span');
            newKeySpanUpE.innerHTML = currentKey.upE;
            newKeySpanUpE.id = 'keyUpE' + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanUpE, currentKey.options);
            newKeySpanUpE.classList.add('hidden');
            rowDiv.appendChild(newKeySpanUpE);

            let newKeySpanUpR = document.createElement('span');
            newKeySpanUpR.innerHTML = currentKey.upR;
            newKeySpanUpR.id = 'keyUpR' + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanUpR, currentKey.options);
            newKeySpanUpR.classList.add('hidden');
            rowDiv.appendChild(newKeySpanUpR);
        }

        keyboard.appendChild(rowDiv);
    }  
    setListeners();
}
window.onload = drawKeyboard;

