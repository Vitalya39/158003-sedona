'use strict';

var FORM = document.querySelector('.search-hotels__form');
var SHOW_FORM_BUTTON = document.querySelector('.open-form');
var LOGIN_FORM = document.querySelector('[name=arrival__date]')

SHOW_FORM_BUTTON.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (FORM.classList.contains('visually-hidden')) {
    LOGIN_FORM.focus();
    FORM.classList.remove('visually-hidden')
    FORM.classList.add('form-bounce');
  } else {
    FORM.classList.add('visually-hidden')
    FORM.classList.remove('form-bounce');
  }
});
