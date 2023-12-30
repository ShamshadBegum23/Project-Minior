const paybtn=document.querySelector('.btn-buy');
paybtn.addEventListener('click',()=>{
    fetch('/stripe-checkout',{
        method:'post',
        headers:new Headers({'Content-Type':'application/Json'}),
        body:JSON.stringify({
            items:JSON.parse(localStorage.getItem('carditems')),
        }),
    })
    .then((res)=>res.json())
    .then((url)=>{
        location.href=url;

    })
    .catch((err)=>console.log(err));
});