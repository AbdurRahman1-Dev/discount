
document.getElementById('apply').addEventListener('click', function (){
  // get the price
  const price =  document.getElementById('price');
  const priceValue = price.innerText;
  const priceNumber = parseFloat(priceValue);

  // calculate Discount
  
  const discount = priceNumber * 30 / 100;
  const totalDiscount = priceNumber - discount;

  // get cupon code

  const code = document.getElementById('code')
  const cupon = document.getElementById('cupon')
  const cuponText = cupon.value;

  // apply cupon code logic

  if(cuponText == "DISC30"){
  price.innerText = totalDiscount;
  } else{
    code.classList.remove('hidden')
  }

})