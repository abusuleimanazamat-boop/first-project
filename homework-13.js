class Drink {
  #temperature

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр Drink ");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getTemperature() {
    return this.#temperature
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature
  }

  getInfo() {
    return `Название: ${this.name}, Цена: ${this.price}, Обьем: ${this.size}, Температура: ${this.getTemperature()}`
  }

  #prepare() {
    console.log('Напиток готовится');
    this.setTemperature(this.getTemperature() - 5);
  }

  serve() {
    this.#prepare();
    console.log('Напиток подан');
  }
};

class Coffee extends Drink {

  constructor(name, size, price, temperature, beans, milk) {
    super(name, size, price, temperature)
    this.beans = beans;
    this.milk = milk;
  }
  getInfo() {
    return `${super.getInfo()}, Зерна: ${this.beans}, Молоко: ${this.milk}`
  }

};

class Tea extends Drink {

  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature)
    this.teaType = teaType;
  }

  getInfo() {
    return `${super.getInfo()}, Тип чая: ${this.teaType}`
  }

};

class Lemonade extends Drink {

  constructor(name, size, price, temperature, flavor, carbonated) {
    super(name, size, price, temperature)
    this.flavor = flavor;
    this.carbonated = carbonated;
  }

  getInfo() {
    return `${super.getInfo()}, Вкус: ${this.flavor}, Газированный: ${this.carbonated}`
  }
};

class Cocoa extends Drink {

  constructor(name, size, price, temperature, milkType, chocolateType, marshmallow) {
    super(name, size, price, temperature)
    this.milkType = milkType;
    this.chocolateType = chocolateType;
    this.marshmallow = marshmallow;
  }

  getInfo() {
    return `${super.getInfo()}, Молоко: ${this.milkType}, Шоколад: ${this.chocolateType}, Маршмеллоу: ${this.marshmallow}`
  }
};

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Название: ${this.name}, Месторасположение: ${this.location}`
  }
  orderDrink(drink) {
    drink.serve()
  }
};

const coffee = new Coffee (
  "Флэт-Вайт",
  "250 ml",
  180,
  80,
  "Арабика",
  "Цельное",
);

const tea = new Tea (
  "черный чай",
  "500 ml",
  200,
  80,
  "Golden ceylon"
);

const lemonade = new Lemonade (
  "Дюшес",
  "350 ml",
  150,
  30,
  "груша",
  true,
);

const cocoa = new Cocoa (
  "Классическое какао",
  "300 ml",
  300,
  65,
  "Цельное",
  "Молочный",
  true,
);

const cafe = new Cafe (
  "Coffee Way",
  "Иваново, ул.8 марта, 32"
);