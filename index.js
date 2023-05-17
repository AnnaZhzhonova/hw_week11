const firstPrice = document.querySelector('#firstProductPrice');
const secondPrice = document.querySelector('#secondProductPrice');
const thirdPrice = document.querySelector('#thirdProductPrice');
const fourthPrice = document.querySelector('#fourthProductPrice');
const discount = 0.8;

const sumPrice  = Number(firstPrice.textContent) + Number(secondPrice.textContent) + Number(thirdPrice.textContent) + Number(fourthPrice.textContent);

let totalProductPrice = document.querySelector('#outcome__price');
totalProductPrice.textContent = sumPrice;

const discountBtn = document.querySelector('.discount-btn');

discountBtn.onclick = function (){
  totalProductPrice.textContent = sumPrice * discount;
  firstPrice.textContent = Number(firstPrice.textContent) * discount
  secondPrice.textContent = Number(secondPrice.textContent) * discount
  thirdPrice.textContent = Number(thirdPrice.textContent) * discount
  fourthPrice.textContent = Number(fourthPrice.textContent) * discount
}

