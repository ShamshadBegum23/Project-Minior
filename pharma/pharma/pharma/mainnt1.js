let cartIcon=document.querySelector('#cart-icon');
let cart=document.querySelector('.cart');
let closcart=document.querySelector('#close-cart');
let paynow=document.getElementById("paynow");

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
        loadcartitems();
        // document.getElementsByClassName('btn-buy')[0].addEventListener('click',buybuttonclicked);
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
    savecartitems();
}
function quantitychanged(event){
    var input=event.target;
    if(isNaN(input.value)||input.value<=0){
        input.value=1;
    }
    updatetotal();
    savecartitems();
    updatecarticon();
}
function addcartclicked(event){
    var button=event.target;
    var shopproducts=button.parentElement;
    var title=shopproducts.getElementsByClassName('product-title')[0].innerText;
    var price=shopproducts.getElementsByClassName('price')[0].innerText;
    var productimg=shopproducts.getElementsByClassName('product-img')[0].src;
    addproducttocart(title,price,productimg);
    updatetotal();
    savecartitems();
    updatecarticon();
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
savecartitems();
updatecarticon();
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
    }
        total=Math.round(total*100)/100;
        document.getElementsByClassName('total-price')[0].innerText="$"+total;
        paynow.href="login1.php?total="+total;
    localStorage.setItem('cartTotal',total);
    
}
function savecartitems(){
    var cartcontent=document.getElementsByClassName('cart-content')[0];
    var cartboxes=cartcontent.getElementsByClassName('cart-box');
    var cartitems=[];
    for(var i=0;i<cartboxes.length;i++){
       cartboxes=cartboxes[i];
        var titleelement=cartboxes .getElementsByClassName('cart-product-title')[0];
        var priceelement=cart.getElementsByClassName('cart-price')[0];
        var quantityelement=cartboxes.getElementsByClassName('cart-quantity')[0];
        var productimg=cartboxes.getElementsByClassName('cart-img')[0].src;

        var item = {
            title:titleelement.innerText,
            price:priceelement.innerText,
            quantity:quantityelement.value,
            productimg:productimg,
        };
        cartitems.push(item);
    }
    localStorage.setItem('carditems',JSON.stringify(cartitems));
}
function loadcartitems(){

    var cartitems=localStorage.getItem('cartitems');
    if(cartitems){
        cartitems=JSON.parse(cartitems);

        for(var i=0; i<cartitems.length;i++){
            var item=cartitems[i];
            addproducttocart(item.title,item.price,item.productimg);

            var cartboxes=document.getElementsByClassName('cart-box');
            var cartbox=cartboxes[cartboxes.length-1];
            var quantityelement=cartbox.getElementsByClassName('cart-quantity')[0];
            quantityelement.value=item.quantity;

        }
    }
    var cartTotal=localStorage.getItem('cartTotal');
    if(cartTotal){
        document.getElementsByClassName('total-price')[0].innerText="$"+cartTotal;
    }
    updatecarticon();
}
function updatecarticon(){
    var cartboxes=document.getElementsByClassName('cart-box');
    var quantity=0;
    for(var i=0;i<cartboxes.length;i++){
        var cartbox=cartboxes[i];
        var quantityelement=cartbox.getElementsByClassName('cart-quantity')[0];
        quantity+=parseInt(quantityelement.value);
    }
    var cartIcon=document.querySelector('#cart-icon');
    cartIcon.setAttribute('data-quantity',quantity);
}