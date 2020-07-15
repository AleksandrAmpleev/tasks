﻿const arrKeyBoard = [
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
        { eng: 'w', rus: 'ц', upE: 'W', upR: 'Ц', keycode: 50, options: { spKey: false } },
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
        { eng: 'a', rus: 'ф', upE: '', upR: '', keycode: 65, options: { spKey: false } },
        { eng: 's', rus: 'ы', upE: '', upR: '', keycode: 83, options: { spKey: false } },
        { eng: 'd', rus: 'в', upE: '', upR: '', keycode: 68, options: { spKey: false } },
        { eng: 'f', rus: 'а', upE: '', upR: '', keycode: 70, options: { spKey: false } },
        { eng: 'g', rus: 'п', upE: '', upR: '', keycode: 71, options: { spKey: false } },
        { eng: 'h', rus: 'р', upE: '', upR: '', keycode: 72, options: { spKey: false } },
        { eng: 'j', rus: 'о', upE: '', upR: '', keycode: 74, options: { spKey: false } },
        { eng: 'k', rus: 'л', upE: '', upR: '', keycode: 75, options: { spKey: false } },
        { eng: 'l', rus: 'д', upE: '', upR: '', keycode: 76, options: { spKey: false } },
        { eng: ';', rus: 'ж', upE: '', upR: '', keycode: 186, options: { spKey: false } },
        { eng: '\'', rus: 'э', upE: '', upR: '', keycode: 222, options: { spKey: false } },
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
        let extCode = '';
        if ((e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) && e.location === 2) {
            extCode = '22';
        }
        let element = document.getElementById('keyEn' + e.keyCode + extCode);

        if (element) {
            element.classList.toggle('keyPress1');
        }
    });
    addEventListener("keyup", function (e) {
        let extCode = '';
        if ((e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) && e.location === 2) {
            extCode = '22';
        }
        let element = document.getElementById('keyEn' + e.keyCode + extCode);
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

