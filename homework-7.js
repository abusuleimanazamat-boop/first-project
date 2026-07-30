function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`)
}
showTemperature('Иваново', 21);

const LIGHT_SPEED =  299792458;
function checkSpeed(speed) {
  if (speed >  LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if(speed === LIGHT_SPEED) {
   console.log('Скорость света');
  } else {
   console.log('Субсветовая скорость');
  }
}
checkSpeed(299792458);

let product = "Iphone";
let price = 100;
function checkPrice(balance) {
  if (balance >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`); 
  }
  else {
    const difference = price - balance;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}
checkPrice(90);