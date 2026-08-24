import { productCards } from "./product-cards.js";

const productCardTemplate = document.querySelector('#product-card-template');
const products = document.querySelector('#products');

const productDescription = productCards.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);

console.log(productDescription);

function showCards() {
  const num = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(num)
  if (count < 1 || count > 5 || isNaN(count)) {
    return null;
    
  }
  return count;
};

function renderProductCards(productCards) {
  productCards.forEach(({ title, description, skinType, price, image,ingredients,}) => {
    const productCopy = productCardTemplate.content.cloneNode(true);
    productCopy.querySelector('.product-card__title').textContent = title;
    productCopy.querySelector('.product-card__description').textContent = description;
    productCopy.querySelector('.product-card__skin-type').textContent = skinType;
    productCopy.querySelector('.product-card__price').innerHTML = `${price} &#8381;`;
    productCopy.querySelector('.product-card__image').src = `./img/${image}.png`;
    const compoundLists = productCopy.querySelector('.product-card__ingredients');
    
    ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      compoundLists.appendChild(li);
      
      products.appendChild(productCopy);
    });
  });
  
};
const result = showCards();
const cardsToRender = productCards.slice(0, result);  console.log(cardsToRender);
renderProductCards(cardsToRender);