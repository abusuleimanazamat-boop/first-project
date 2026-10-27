class Smartphone  {
  constructor(brand ,model) {
    this.brand = brand ;
    this.model = model;
  }

  charge() {
    console.log('Заряжен');
  }
};

class GamingSmartphone extends Smartphone {
  constructor(brand,model) {
    super(brand, model);
    this.battery = 100;
  };

  recharge() {
    this.battery = 100;
    console.log('Смартфон заряжен')
  }

  playGame() {
    console.log('Запускаем игру')
  }
};

const phone = new GamingSmartphone('ASUS','ROG PHONE')
phone.battery = 40
console.log(phone.brand);
console.log(phone.model);
console.log(phone.battery);
phone.charge();
phone.recharge();
phone.playGame();