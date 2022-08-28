'use strict';

const openModalBtn = document.querySelectorAll('.show-modal');
const hidden = document.querySelector('.hidden');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const addHidden = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const removeHidden = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let index = 0; index < openModalBtn.length; index++) {
  openModalBtn[index].addEventListener('click', removeHidden);
}

overlay.addEventListener('click', addHidden);

closeModal.addEventListener('click', addHidden);
