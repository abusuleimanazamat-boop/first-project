const emailForm = document.querySelector('#email-form')
  emailForm.addEventListener('submit',(event) => {
  event.preventDefault();
  const email = emailForm.querySelector('[name="email"]').value;
  console.log({
    email: email
  });
});

const modalOpenBtn = document.querySelector('.rgn-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.modal-close');
const registrationForm =document.getElementById('registration-form');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeat-password');
let newUser;


modalOpenBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed');
  overlay.classList.add('overlay-showed');
});

modalCloseBtn.addEventListener('click',() => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});

registrationForm.addEventListener('submit',(event) => {
  event.preventDefault();
    if (!registrationForm.checkValidity()) {
    alert("Заполните все обязательные поля");
    return;
  }
  if (passwordInput.value !== repeatPasswordInput.value) {
    alert('Пароли не совпадают');
    return;
  }
  const formData = new FormData(registrationForm)
  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  console.log(formData);

  newUser = formObject;
  newUser.createdOn = new Date();
  console.log(newUser);
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});