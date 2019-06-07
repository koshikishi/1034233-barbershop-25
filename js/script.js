'use strict';

var loginLink = document.querySelector('.login-link');

var modalLogin = document.querySelector('.modal-login');
var overlay = document.querySelector('.overlay');
var modalLoginClose = modalLogin.querySelector('.modal-close');

var loginForm = modalLogin.querySelector('.login-form');
var userLogin = loginForm.querySelector('#login-user');
var userPassword = loginForm.querySelector('#password-user');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.add('modal-shown');
  overlay.classList.add('overlay-shown');

  if (storage) {
    userLogin.value = storage;
    userPassword.focus();
  } else {
    userLogin.focus();
  }
});

modalLoginClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove('modal-shown');
  modalLogin.classList.remove('modal-error');
  overlay.classList.remove('overlay-shown');
});

loginForm.addEventListener('submit', function (evt) {
  if (!userLogin.value || !userPassword.value) {
    evt.preventDefault();
    modalLogin.classList.remove('modal-error');
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', userLogin.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalLogin.classList.contains('modal-shown')) {
      modalLogin.classList.remove('modal-shown');
      modalLogin.classList.remove('modal-error');
      overlay.classList.remove('overlay-shown');
    }
  }
});

overlay.addEventListener('click', function () {
  modalLogin.classList.remove('modal-shown');
  modalLogin.classList.remove('modal-error');
  overlay.classList.remove('overlay-shown');
});
