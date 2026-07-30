// (1) Анкетные данные 
const user = {
  name : 'Азамат',
  surname : 'Бийболатов',
  age : 40 ,
  country : 'Россия',
  city : 'Иваново',
  timeZone: 'Europe/Moscow' ,
  jobTitle : 'оператор АПЛСУ',
  maritalStatus : 'женат',
  company : 'MSG-SERVICE ',
  email : 'abusuleiman.azamat@gmail.com',
};
console.log(user);

// (2) Данные об автомобиле
const car = {
  brand: 'Kia',
  model: 'Carnival',
  year: 2004,
  color: 'серебристый',
  mileage: 136000,
  transmission: 'automatic',
  owner: user,
};
console.log(car);

// (3) Проверка максимальной скорости
function addMaxSpeed(car) {
  if('maxSpeed' in car) {
    return
  }
  car.maxSpeed = 280
};
addMaxSpeed(car);
console.log(car);

// (4) 6-ой пункт д/з
  
function showProperty(car, key) {
  console.log(car[key])
};
showProperty(car, 'model');

// (5) 7-ой пункт д/з
const fruits = ['apple', 'banana', 'grapefruit'];

//  (6) 8-ой пункт д/з
const books = [
  {
    title: 'Танбих аль Афхам',
    author: 'Мухаммад ибн Салих аль Усеймин',
    publisher: 'Daura',
    publicationYear: 2000,
    genre: 'религиозная литература',
  },
  {
    title: 'Описание молитвы Пророка,да благословит его Аллах и приветствует миром',
    author: 'Мухаммад ибн Нух аль Альбани',
    publisher: 'UMMAH',
    publicationYear: 1997,
    genre: 'религиозная литература',
  },
  {
    title: 'Сподвижники Посланника Аллаха,да благословит его Аллах и приветствует миром',
    author: 'Абу Ислам Салих Таха',
    publisher: 'Daura',
    publicationYear: 1997,
    genre: 'религиозная литература',
  },
];

books.push(
  {
    title: 'Достоверное жизнеописание Пророка Мухаммада,да благословит его Аллах и приветствует миром',
    author: 'Абу Ислам Салих Таха',
    publisher: 'Daura',
    publicationYear: 2026,
    genre: 'религиозная литература',
  }
);
console.log(books);

// (7) 9-ый пункт д/з,объединение массивов.
const iLove = [
  {
    title: 'Я люблю Аллаха',
    author: 'Карима Сорокоумова',
    publisher: 'Umma-Land',
    publicationYear: 2023,
    genre: 'детская религиозная литература', 
  },
  {
    title: 'Я люблю Ислам. 20 дней из жизни Асии',
    author: 'Карима Сорокоумова',
    publisher: 'УММАЛЕНД',
    publicationYear: 2024,
    genre: 'детская религиозная литература', 
  },
  {
    title: 'Я люблю Пророка(мир ему и благословение Аллаха)',
    author: 'Карима Сорокоумова',
    publisher: 'Umma-Land',
    publicationYear: 2023,
    genre: 'детская религиозная литература',
  },
]
const allBooks = [...books, ...iLove];
console.log(allBooks);

// (8) 10-ый пункт д/з. 
function addIsRare(books) {
 return books.map((book) => {
    return {
      ...book,
      isRare: book.publicationYear > 2000 ? true  : false  ,
    }
  })
}
console.log(addIsRare(allBooks));