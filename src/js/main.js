const btn = document.querySelector('.form__button');
const input = document.querySelector('.form__input');
const list = document.querySelector('.list');
btn.addEventListener('click', addItem);

import msg from './es6.js'

msg('ok');


function addItem(e) {
    e.preventDefault();
    if (input.value != '') {
        let li = document.createElement('li');
        li.className = 'list list__item';
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    }
};
