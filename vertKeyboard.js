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
        { eng: 'Tab', rus: 'Tab', upE: 'Tab', upR: 'Tab', keycode: 9, options: { spKey: true } },
        { eng: 'q', rus: 'й', upE: 'Q', upR: 'Й', keycode: 81, options: { spKey: false } },
        { eng: 'w', rus: 'ц', upE: 'W', upR: 'Ц', keycode: 87, options: { spKey: false } },
        { eng: 'e', rus: 'у', upE: 'E', upR: 'У', keycode: 69, options: { spKey: false } },
        { eng: 'r', rus: 'к', upE: 'R', upR: 'К', keycode: 82, options: { spKey: false } },
        { eng: 't', rus: 'е', upE: 'T', upR: 'Е', keycode: 84, options: { spKey: false } },
        { eng: 'y', rus: 'н', upE: 'Y', upR: 'Н', keycode: 89, options: { spKey: false } },
        { eng: 'u', rus: 'г', upE: 'U', upR: 'Г', keycode: 85, options: { spKey: false } },
        { eng: 'i', rus: 'ш', upE: 'I', upR: 'Ш', keycode: 73, options: { spKey: false } },
        { eng: 'o', rus: 'щ', upE: 'O', upR: 'Щ', keycode: 79, options: { spKey: false } },
        { eng: 'p', rus: 'з', upE: 'P', upR: 'З', keycode: 80, options: { spKey: false } },
        { eng: '[', rus: 'х', upE: '{', upR: 'Х', keycode: 219, options: { spKey: false } },
        { eng: ']', rus: 'ъ', upE: '}', upR: 'Ъ', keycode: 221, options: { spKey: false } },
        { eng: '\\', rus: '\\', upE: '|', upR: '/', keycode: 220, options: { spKey: false } },
        { eng: 'Del', rus: 'Del', upE: 'Del', upR: 'Del', keycode: 46, options: { spKey: true } }],
    [
        { eng: 'CapsLock', rus: 'CapsLock', upE: 'CapsLock', upR: 'CapsLock', keycode: 20, options: { spKey: true, extStyles: ['capsLockKey'] } },
        { eng: 'a', rus: 'ф', upE: 'A', upR: 'Ф', keycode: 65, options: { spKey: false } },
        { eng: 's', rus: 'ы', upE: 'S', upR: 'Ы', keycode: 83, options: { spKey: false } },
        { eng: 'd', rus: 'в', upE: 'D', upR: 'В', keycode: 68, options: { spKey: false } },
        { eng: 'f', rus: 'а', upE: 'F', upR: 'А', keycode: 70, options: { spKey: false } },
        { eng: 'g', rus: 'п', upE: 'G', upR: 'П', keycode: 71, options: { spKey: false } },
        { eng: 'h', rus: 'р', upE: 'H', upR: 'Р', keycode: 72, options: { spKey: false } },
        { eng: 'j', rus: 'о', upE: 'J', upR: 'О', keycode: 74, options: { spKey: false } },
        { eng: 'k', rus: 'л', upE: 'K', upR: 'Л', keycode: 75, options: { spKey: false } },
        { eng: 'l', rus: 'д', upE: 'L', upR: 'Д', keycode: 76, options: { spKey: false } },
        { eng: ';', rus: 'ж', upE: ';', upR: 'Ж', keycode: 186, options: { spKey: false } },
        { eng: '\'', rus: 'э', upE: '\'', upR: 'Э', keycode: 222, options: { spKey: false } },
        { eng: 'Enter', rus: 'Enter', upE: 'Enter', upR: 'Enter', keycode: 13, options: { spKey: true, extStyles: ['enterKey'] } }],
    [
        { eng: 'Shift', rus: 'Shift', upE: 'Shift', upR: 'Shift', keycode: 16, options: { spKey: true, extStyles: ['shiftKey'] } },
        { eng: 'z', rus: 'я', upE: 'Z', upR: 'Я', keycode: 90, options: { spKey: false } },
        { eng: 'x', rus: 'ч', upE: 'X', upR: 'Ч', keycode: 88, options: { spKey: false } },
        { eng: 'c', rus: 'с', upE: 'C', upR: 'С', keycode: 67, options: { spKey: false } },
        { eng: 'v', rus: 'м', upE: 'V', upR: 'М', keycode: 86, options: { spKey: false } },
        { eng: 'b', rus: 'и', upE: 'B', upR: 'И', keycode: 66, options: { spKey: false } },
        { eng: 'n', rus: 'т', upE: 'N', upR: 'Т', keycode: 78, options: { spKey: false } },
        { eng: 'm', rus: 'ь', upE: 'M', upR: 'Ь', keycode: 77, options: { spKey: false } },
        { eng: ',', rus: 'б', upE: '<', upR: 'Б', keycode: 188, options: { spKey: false } },
        { eng: '.', rus: 'ю', upE: '>', upR: 'Ю', keycode: 190, options: { spKey: false } },
        { eng: '/', rus: '.', upE: '?', upR: ',', keycode: 191, options: { spKey: false } },
        { eng: '↑', rus: '↑', upE: '↑', upR: '↑', keycode: 38, options: { spKey: true } },
        { eng: 'Shift', rus: 'Shift', upE: 'Shift', upR: 'Shift', keycode: 1622, options: { spKey: true, extStyles: ['shiftKey'] } }],
    [
        { eng: 'Ctrl', rus: 'Ctrl', upE: 'Ctrl', upR: 'Ctrl', keycode: 17, options: { spKey: true, extStyles: ['ctrlKey'] } },
        { eng: 'Win', rus: 'Win', upE: 'Win', upR: 'Win', keycode: 91, options: { spKey: true } },
        { eng: 'Alt', rus: 'Alt', upE: 'Alt', upR: 'Alt', keycode: 18, options: { spKey: true, extStyles: ['altKey'] } },
        { eng: '', rus: '', upE: '', upR: '', keycode: 32, options: { spKey: true, extStyles: ['spaceKey'] } },
        { eng: 'Alt', rus: 'Alt', upE: 'Alt', upR: 'Alt', keycode: 1822, options: { spKey: true, extStyles: ['altKey'] } },
        { eng: '←', rus: '←', upE: '←', upR: '←', keycode: 37, options: { spKey: true } },
        { eng: '↓', rus: '↓', upE: '↓', upR: '↓', keycode: 40, options: { spKey: true } },
        { eng: '→', rus: '→', upE: '→', upR: '→', keycode: 39, options: { spKey: true } },
        { eng: 'Ctrl', rus: 'Ctrl', upE: 'Ctrl', upR: 'Ctrl', keycode: 1722, options: { spKey: true, extStyles: ['ctrlKey'] } }]
];

const txtArea = document.querySelector('#textareaId');
const keyboard = document.querySelector('#keyboadId');

const constKeyEngU = 'keyUpE';
const constKeyEngR = 'keyUpR';
const constKeyEng = 'keyEn';
const constKeyRU = 'keyRu';

let currentKeyboardEng = true;
let currentKeyboardUppercase = false;

let pressedCtrl = 0;
let pressedAlt = 0;

function getSwither() {
    let swither = constKeyEng;

    if (currentKeyboardEng) {
        swither = currentKeyboardUppercase ? constKeyEngU : constKeyEng;
    } else {
        swither = currentKeyboardUppercase ? constKeyEngR : constKeyRU;
    }
    return swither;
}

function setExtKeyBoardStyles(elem, options) {
    elem.classList.add(options.spKey ? 'sKey' : 'key');
    if (options.extStyles) {
        for (let i = 0; i < options.extStyles.length; i++) {
            elem.classList.add(options.extStyles[i]);
        }
    }
}

function switchKeyboardCase() {
    let elementsNeedToHide = undefined;
    let elementsNeedToUnHide = undefined;

    if (currentKeyboardEng) {
        elementsNeedToHide = document.querySelectorAll('[id^="keyEn"]');
        elementsNeedToUnHide = document.querySelectorAll('[id^="keyUpE"]');
    }
    else {
        elementsNeedToHide = document.querySelectorAll('[id^="keyRu"]');
        elementsNeedToUnHide = document.querySelectorAll('[id^="keyUpR"]');
    }

    for (let i = 0; i < elementsNeedToHide.length; i++) {
        elementsNeedToHide[i].classList.toggle('hidden');
    }

    for (let i = 0; i < elementsNeedToUnHide.length; i++) {
        elementsNeedToUnHide[i].classList.toggle('hidden');
    }
}

function switchLanguage() {

    let elementsNeedToHide = document.querySelectorAll(currentKeyboardUppercase ? '[id^="keyUpE"]' : '[id^="keyEn"]');
    let elementsNeedToUnHide = document.querySelectorAll(currentKeyboardUppercase ? '[id^="keyUpR"]' : '[id^="keyRu"]'); 

    for (let i = 0; i < elementsNeedToHide.length; i++) {
        elementsNeedToHide[i].classList.toggle('hidden');
    }

    for (let i = 0; i < elementsNeedToUnHide.length; i++) {
        elementsNeedToUnHide[i].classList.toggle('hidden');
    }
}

function keyClick(e) {
    let extCode = '';
    if ((e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) && e.location === 2) {
        extCode = '22';
    }
    let element = document.getElementById(constKeyEng + e.keyCode + extCode);
    if (element) {
        element.classList.toggle('keyPress1');
    }
}

function clearKey(code, extCode) {
    let swither = getSwither();
    let elementForClear = document.getElementById(swither + code + extCode);
    if (elementForClear) {
        elementForClear.classList.remove('keyPress1');
    }  
}

function setListeners() {
    for (let i = 0; i < arrKeyBoard.length; i++) {
        for (let j = 0; j < arrKeyBoard[i].length; j++) {
            let elementEn = document.getElementById(constKeyEng + arrKeyBoard[i][j].keycode);
            elementEn.addEventListener('click', keyClick);

            let elementEnUp = document.getElementById(constKeyEngU + arrKeyBoard[i][j].keycode);
            elementEnUp.addEventListener('click', keyClick);

            let elementRu = document.getElementById(constKeyRU + arrKeyBoard[i][j].keycode);
            elementRu.addEventListener('click', keyClick);

            let elementRuUp = document.getElementById(constKeyEngR + arrKeyBoard[i][j].keycode);
            elementRuUp.addEventListener('click', keyClick);

        }
    }
    addEventListener("keydown", function (e) {
        let extCode = '';
        if ((e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) && e.location === 2) {
            extCode = '22';
        }
        let swither = getSwither(); 
        let element = document.getElementById(swither + e.keyCode + extCode);

        if (element) {
            element.classList.toggle('keyPress1');
        }
        if (e.keyCode === 16 || e.keyCode === 1622) {
            switchKeyboardCase();
        }

        if (e.keyCode === 17) { pressedCtrl = 1; }
        if (e.keyCode === 18) { pressedAlt = 1; }

        if (pressedCtrl > 0 && pressedAlt > 0) {
            currentKeyboardEng = !currentKeyboardEng;
            switchLanguage();
            pressedCtrl = 0;
            pressedAlt = 0;
        }
    });
    addEventListener("keyup", function (e) {
        let extCode = '';
        if ((e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) && e.location === 2) {
            extCode = '22';
        }
        let swither = getSwither(); 
        let element = document.getElementById(swither + e.keyCode + extCode);
        if (element) {
            element.classList.toggle('keyPress1');
        }
        if (e.keyCode === 16 || e.keyCode === 1622) {
            switchKeyboardCase();
            currentKeyboardUppercase = false;
        }

        pressedCtrl = 0;
        pressedAlt = 0;

        if (e.keyCode === 20) {
            switchKeyboardCase();
            currentKeyboardUppercase = !currentKeyboardUppercase;
        }
        if (e.keyCode === 17) {
            clearKey(e.keyCode, extCode);
        }
        if (e.keyCode === 18) {
            clearKey(e.keyCode, extCode);
        }
    });
}

function drawKeyboard() {
    for (var j = 0; j < arrKeyBoard.length; j++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let i = 0; i < arrKeyBoard[j].length; i++) {
            let newKeySpanEng = document.createElement('span');
            let currentKey = arrKeyBoard[j][i];
            newKeySpanEng.innerHTML = currentKey.eng;
            newKeySpanEng.id = constKeyEng + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanEng, currentKey.options);
            rowDiv.appendChild(newKeySpanEng);

            let newKeySpanRus = document.createElement('span');
            newKeySpanRus.innerHTML = currentKey.rus;
            newKeySpanRus.id = constKeyRU + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanRus, currentKey.options);
            newKeySpanRus.classList.add('hidden');
            rowDiv.appendChild(newKeySpanRus);

            let newKeySpanUpE = document.createElement('span');
            newKeySpanUpE.innerHTML = currentKey.upE;
            newKeySpanUpE.id = constKeyEngU + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanUpE, currentKey.options);
            newKeySpanUpE.classList.add('hidden');
            rowDiv.appendChild(newKeySpanUpE);

            let newKeySpanUpR = document.createElement('span');
            newKeySpanUpR.innerHTML = currentKey.upR;
            newKeySpanUpR.id = constKeyEngR + currentKey.keycode;
            setExtKeyBoardStyles(newKeySpanUpR, currentKey.options);
            newKeySpanUpR.classList.add('hidden');
            rowDiv.appendChild(newKeySpanUpR);
        }
        keyboard.appendChild(rowDiv);
    }
    setListeners();
}
window.onload = drawKeyboard;

