"use strict";var FORM=document.querySelector(".search-hotels__form"),SHOW_FORM_BUTTON=document.querySelector(".open-form"),ARRIVAL_DATE=document.querySelector("[name=arrival__date]"),DEPARTURE_DATE=document.querySelector("[name=departure__date]"),ADULTS_COUNT=document.querySelector("[name=adults__amount]"),KIDS_COUNT=document.querySelector("[name=children__amount]");SHOW_FORM_BUTTON.addEventListener("click",function(e){e.preventDefault(),FORM.classList.contains("visually-hidden")?(ARRIVAL_DATE.focus(),FORM.classList.remove("visually-hidden"),FORM.classList.add("form-bounce")):(FORM.classList.add("visually-hidden"),FORM.classList.remove("form-bounce"))}),FORM.addEventListener("submit",function(e){ARRIVAL_DATE.value&&DEPARTURE_DATE.value&&ADULTS_COUNT.value&&KIDS_COUNT.vale||(e.preventDefault(),FORM.classList.remove("form-error"),FORM.classList.add("form-error"))});