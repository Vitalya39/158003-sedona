'use strict';

var FORM = document.querySelector('.search-hotels__form');
var SHOW_FORM_BUTTON = document.querySelector('.open-form');
var ARRIVAL_DATE = document.querySelector('[name=arrival__date]');
var DEPARTURE_DATE = document.querySelector('[name=departure__date]');
var ADULTS_COUNT = document.querySelector('[name=adults__amount]');
var KIDS_COUNT = document.querySelector('[name=children__amount]');

SHOW_FORM_BUTTON.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (FORM.classList.contains('visually-hidden')) {
    ARRIVAL_DATE.focus();
    FORM.classList.remove('visually-hidden')
    FORM.classList.add('form-bounce');
  } else {
    FORM.classList.add('visually-hidden')
    FORM.classList.remove('form-bounce');
  }
});

FORM.addEventListener('submit', function (evt) {
  if (!ARRIVAL_DATE.value || !DEPARTURE_DATE.value || !ADULTS_COUNT.value || !KIDS_COUNT.vale) {
    evt.preventDefault();
    FORM.classList.remove('form-error');
    FORM.classList.add('form-error');
  }
});
