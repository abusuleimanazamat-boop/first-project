import { productCards } from "./product-cards.js";

const productCardTemplate = document.querySelector('#product-card-template');
const products = document.querySelector('#products');

productCards.forEach(product => {
  const productCopy = productCardTemplate.content.cloneNode(true);
  productCopy.querySelector('.product-card__title').textContent = product.title;
  productCopy.querySelector('.product-card__description').textContent = product.description;
  productCopy.querySelector('.product-card__skin-type').textContent = product.skinType;
  productCopy.querySelector('.product-card__ingredients-title').textContent = `Состав`;
  productCopy.querySelector('.product-card__price').textContent = product.price;
  productCopy.querySelector('.product-card__image').src = product.image;
  const compoundLists = productCopy.querySelector('.product-card__ingredients');

  product.ingredients.forEach(ingredient => {
    const li = document.createElement('li')
    li.textContent = ingredient
    compoundLists.appendChild(li)

  });
  products.appendChild(productCopy);
});
console.log(productCards);

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