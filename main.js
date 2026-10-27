import './product-cards.js';
import './comment.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './homework-12.js';
import Modal from './modal.js';
import Form from './form.js';

const registrationModal = new Modal ('registration-modal');

const registrationBtn = document.querySelector('.rgn-btn');
registrationBtn.addEventListener('click', () => {
  registrationModal.open()
});
const registrationForm = new Form('registration-form');
console.log(registrationForm.validate());
const productCard = document.querySelector('.product-card');
const changeCardColorBtn = document.getElementById('change-card-color-btn');
const redColorHash = '#dd1111';
const productCards = document.querySelectorAll('.product-card');
const changeAllCardsColorBtn = document.getElementById('change-all-cards-color-btn');
const openGoogleBtn = document.getElementById('open-Google-btn');
const greenColorHash = '#00FF00';
const outputConsoleLogBtn = document.getElementById('output-console-log-btn');
const changeColorBtn = document.getElementById('change-color-btn');

changeCardColorBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = redColorHash;
});
  
changeAllCardsColorBtn.addEventListener('click', () => {
  productCards.forEach(card => card.style.backgroundColor = greenColorHash)
});

openGoogleBtn.addEventListener('click', () => openGooglePage());
function openGooglePage() {
  const question = confirm("Вы действительно хотите перейти на Google ?")
  if (question) {
    window.open("https://google.com")
  }
};

outputConsoleLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ №6'));
function outputConsoleLog(message) {
  alert(message)
  console.log(message)
};

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.classList.toggle('active');
});