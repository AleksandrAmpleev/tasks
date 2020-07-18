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
        { eng: ' ', rus: ' ', upE: ' ', upR: ' ', keycode: 32, options: { spKey: true, extStyles: ['spaceKey'] } },
        { eng: 'Alt', rus: 'Alt', upE: 'Alt', upR: 'Alt', keycode: 1822, options: { spKey: true, extStyles: ['altKey'] } },
        { eng: '←', rus: '←', upE: '←', upR: '←', keycode: 37, options: { spKey: true } },
        { eng: '↓', rus: '↓', upE: '↓', upR: '↓', keycode: 40, options: { spKey: true } },
        { eng: '→', rus: '→', upE: '→', upR: '→', keycode: 39, options: { spKey: true } },
        { eng: 'Ctrl', rus: 'Ctrl', upE: 'Ctrl', upR: 'Ctrl', keycode: 1722, options: { spKey: true, extStyles: ['ctrlKey'] } }]
];
const excludeSimbols = [8, 9, 13, 16, 17, 18, 19, 20, 32];
const virtualKB = document.querySelector('#virtualKB');
let keyboard = undefined;
let txtArea = undefined;

const constKeyEngU = 'keyUpE';
const constKeyEngR = 'keyUpR';
const constKeyEng = 'keyEn';
const constKeyRU = 'keyRu';

let currentKeyboardEng = true;
let currentKeyboardUppercase = false;
let capsLockPressed = false;
let previusKey = -1;

let pressedCtrl = 0;
let pressedAlt = 0;

function appendLitera(litera, element) {
    if (element) {
        if (excludeSimbols.lastIndexOf(litera.keyCode) === -1 && litera.keyCode < 1000) {
            txtArea.value += element.innerText;
        }

        switch (litera.keyCode) {
            case 8:
                txtArea.value = txtArea.value.substring(0, txtArea.value.length - 1);
                break;
            case 9:
                txtArea.value += '\t';
                break;
            case 13:
                txtArea.value += '\n';
                break;
            case 32:
                txtArea.value += ' ';
                break;
            default:
                break;
        }
    }    
}

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

    currentKeyboardUppercase = !currentKeyboardUppercase;
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
    let element = document.getElementById(e.target.id);
    let sId = e.target.id.toString()
        .replace(new RegExp(constKeyEngU, 'g'), '')
        .replace(new RegExp(constKeyEngR, 'g'), '')
        .replace(new RegExp(constKeyEng, 'g'), '')
        .replace(new RegExp(constKeyRU, 'g'), '');
    let literaObj = {};
    literaObj.key = e.target.innerText;
    literaObj.keyCode = parseInt(sId);
    appendLitera(literaObj, element);    
}

function clearKey(code) {
     let a = [constKeyEngU, constKeyEngR, constKeyEng, constKeyRU];

    for (var i = 0; i < a.length; i++) {
        let elementForClear = document.getElementById(a[i] + code);
        if (elementForClear) {
            elementForClear.classList.remove('keyPress1');
        }  
        let elementForClearRight = document.getElementById(a[i] + code + '22');
        if (elementForClearRight) {
            elementForClearRight.classList.remove('keyPress1');
        }  
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
    addEventListener("keydown", function (ed) {
        let extCode = '';
        if ((ed.keyCode === 16 || ed.keyCode === 17 || ed.keyCode === 18) && ed.location === 2) {
            extCode = '22';
        }
        let swither = getSwither();
        let element = document.getElementById(swither + ed.keyCode + extCode);

        appendLitera(ed, element);

        if (element) {
            element.classList.add('keyPress1');
        }
        if ((ed.keyCode === 16 || ed.keyCode === 1622) && !(previusKey === 16 || previusKey === 1622)) {
            switchKeyboardCase();
        }

        if (ed.keyCode === 20) {
            clearKey(16);
        }

        if (ed.keyCode === 17) {
            pressedCtrl = 1;
        }
        if (ed.keyCode === 18) {
            pressedAlt = 1;
        }

        if (pressedCtrl > 0 && pressedAlt > 0) {
            currentKeyboardEng = !currentKeyboardEng;
            switchLanguage();
            pressedCtrl = 0;
            pressedAlt = 0;
        }

        previusKey = ed.keyCode;
        ed.preventDefault();
    });
    addEventListener("keyup", function (eU) {
        let extCode = '';
        if ((eU.keyCode === 16 || eU.keyCode === 17 || eU.keyCode === 18) && eU.location === 2) {
            extCode = '22';
        }
        let swither = getSwither();
        let element = document.getElementById(swither + eU.keyCode + extCode);
        if (element) {
            element.classList.remove('keyPress1'); 
        }
        if ((eU.keyCode === 16 || eU.keyCode === 1622) && currentKeyboardUppercase !== capsLockPressed) {
            switchKeyboardCase();
            clearKey(eU.keyCode);
        }

        pressedCtrl = 0;
        pressedAlt = 0;

        if (eU.keyCode === 20) {
            switchKeyboardCase();
            capsLockPressed = !capsLockPressed;
            currentKeyboardUppercase = capsLockPressed;
        }
        if (eU.keyCode === 17) {
            clearKey(eU.keyCode);
        }
        if (eU.keyCode === 18) {
            clearKey(eU.keyCode);
        }
        previusKey = -1;
        eU.preventDefault();
    });
}

function drawKeyboard() {
    let areaTxt = document.createElement('textarea');
    areaTxt.id = 'textareaId';
    areaTxt.className = 'textareaSt';
    areaTxt.rows = '5';
    areaTxt.cols = '50';
    virtualKB.appendChild(areaTxt);

    txtArea = document.querySelector('#textareaId');

    keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    keyboard.id = 'keyboadId';
    virtualKB.appendChild(keyboard);

    let pDescriptions1 = document.createElement('p');
    pDescriptions1.className = 'description';
    pDescriptions1.innerText = 'Клавиатура создана в операционной системе Windows X';
    virtualKB.appendChild(pDescriptions1);

    let pDescriptions2 = document.createElement('p');
    pDescriptions2.className = 'language';
    pDescriptions2.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
    virtualKB.appendChild(pDescriptions2);

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

