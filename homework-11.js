import Form from "./form.js";
const emailForm = document.querySelector("#email-form");
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailForm.querySelector('[name="email"]').value;
  console.log({
    email: email,
  });
});

const modalOpenBtn = document.querySelector(".rgn-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalCloseBtn = document.querySelector(".modal-close");
const rgnForm = document.getElementById("registration-form");
const registrationForm = new Form('registration-form')
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeat-password");
let newUser;

modalOpenBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

rgnForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.validate()) {
    alert("Заполните все обязательные поля");
    return;
  }
  if (passwordInput.value !== repeatPasswordInput.value) {
    alert("Пароли не совпадают");
    return;
  }

  const formObject = registrationForm.getValues();
  console.log(formObject);
  newUser = formObject;
  newUser.createdOn = new Date();
  registrationForm.reset();
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});
