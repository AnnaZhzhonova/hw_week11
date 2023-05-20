const firstPrice = document.querySelector("#firstProductPrice");
const secondPrice = document.querySelector("#secondProductPrice");
const thirdPrice = document.querySelector("#thirdProductPrice");
const fourthPrice = document.querySelector("#fourthProductPrice");
const discount = 0.8;

const sumPrice =
  Number(firstPrice.textContent) +
  Number(secondPrice.textContent) +
  Number(thirdPrice.textContent) +
  Number(fourthPrice.textContent);

let totalProductPrice = document.querySelector("#outcome__price");
totalProductPrice.textContent = sumPrice;

const discountBtn = document.querySelector(".discount-btn");

discountBtn.addEventListener(
  "click",
  () => {
    totalProductPrice.textContent = sumPrice * discount;
    firstPrice.textContent = Number(firstPrice.textContent) * discount;
    secondPrice.textContent = Number(secondPrice.textContent) * discount;
    thirdPrice.textContent = Number(thirdPrice.textContent) * discount;
    fourthPrice.textContent = Number(fourthPrice.textContent) * discount;
  },
  {
    once: true,
  }
);

const enterNumber = document.querySelector("#input-enter");
const showResult = document.querySelector("#input-result");
const calcBtn = document.querySelector("#calc-btn");

const calcResult = () => {
  const result = Math.pow(enterNumber.value, 2);
  showResult.value = result;
};

calcBtn.onclick = calcResult;
