
let productPrice = document.querySelectorAll('.product__price');

function myFunc() {
    let sum = 0;
    let productPrice = document.querySelectorAll('.product__price');
for( let i = 0; i < productPrice.length; i++){
    sum += productPrice[i]
}
}
console.log( myFunc());

let totalProductPrice = document.querySelector('#outcome__price');
totalProductPrice.innerHTML = myFunc();