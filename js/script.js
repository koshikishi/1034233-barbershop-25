'use strict';

var loginLink = document.querySelector('.login-link');
var modalLogin = document.querySelector('.modal-login');
var modalLoginClose = modalLogin.querySelector('.modal-close');

loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.add('modal-shown');
});

modalLoginClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove('modal-shown');
});
