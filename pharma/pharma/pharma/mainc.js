let cartIcon=document.querySelector('#cart-icon');
let cart=document.querySelector('.cart');
let closcart=document.querySelector('#close-cart');

cartIcon.onclick =()=>{
    cart.classList.add("active");
}
closcart.onclick =()=>{
    cart.classList.remove("active");
}
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}
else{
    ready();
}
function ready(){
    var removeCartButtons=document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
        for(var i=0;i<removeCartButtons.length;i++){
            var button=removeCartButtons[i];
            button.addEventListener('click',removeCartItem);
        }
        var quantityinputs=document.getElementsByClassName('cart-quantity');
        for(var i=0;i<quantityinputs.length;i++){
            var input=quantityinputs[i];
            input.addEventListener('change',quantitychanged);
        }
        var addcart=document.getElementsByClassName('add-cart');
        for(var i=0;i<addcart.length;i++){
            var button=addcart[i];
            button.addEventListener('click',addcartclicked);
        }
        document.getElementsByClassName('btn-buy')[0].addEventListener('click',buybuttonclicked);
}
function buybuttonclicked(){
    alert('your order is placed');
    var cartcontent=document.getElementsByClassName('cart-content')[0];
    while(cartcontent.hasChildNodes()){
        cartcontent.removeChild(cartcontent.firstChild);
    }
    updatetotal();
}
function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updatetotal(); 
}
function quantitychanged(event){
    var input=event.target;
    if(isNaN(input.value)||input.value<=0){
        input.value=1;
    }
    updatetotal();
}
function addcartclicked(event){
    var button=event.target;
    var shopproducts=button.parentElement;
    var title=shopproducts.getElementsByClassName('product-title')[0].innerText;
    var price=shopproducts.getElementsByClassName('price')[0].innerText;
    var productimg=shopproducts.getElementsByClassName('product-img')[0].src;
    addproducttocart(title,price,productimg);
    updatetotal();
}
function addproducttocart(title,price,productimg){
    var cartshopbox = document.createElement("div");
    cartshopbox.classList.add('cart-box');
var cartitems=document.getElementsByClassName('cart-content')[0];
var cartitemsnames=cartitems.getElementsByClassName('cart-product-title');
for(var i=0;i<cartitemsnames.length;i++){
    if(cartitemsnames[i].innerText==title){
        alert("you have already add this item to cart");
        return;
    }
}
var cartboxcontent=`
            <img src="${productimg}" alt="" class="cart-img">
            <div class="detail-box">
            <div class="cart-product-title">
               ${title}
            </div>
        <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
            </div>
        <box-icon type='solid' name='trash-alt' class="cart-remove"></box-icon>`;

cartshopbox.innerHTML=cartboxcontent;
cartitems.append(cartshopbox);
cartshopbox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem);
cartshopbox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantitychanged);
}
function updatetotal(){
    var cartcontent=document.getElementsByClassName('cart-content')[0];
    var cartboxes=cartcontent.getElementsByClassName('cart-box');
    var total=0;
    for(var i=0;i<cartboxes.length;i++){
        var cartbox=cartboxes[i];
        var priceelement=cartbox.getElementsByClassName('cart-price')[0];
        var quantityelement=cartbox.getElementsByClassName('cart-quantity')[0];
        var price=parseFloat(priceelement.innerText.replace("$",""));
        var quantity=quantityelement.value;
        total=total+(price*quantity);
        total=Math.round(total*100)/100;
        document.getElementsByClassName('total-price')[0].innerText="$"+total;
    }
    
}