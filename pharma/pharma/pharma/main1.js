let previewContainer=document.querySelector('.product-preview');
let previewBox=previewContainer.querySelectorAll('.preview');
document.querySelectorAll('.all-products .product').forEach(product=>{
    product.onclick=()=>{
        // let previewContainer=document.querySelector('.product-preview');
        preview.style.display='flex';
        let name=product.getAttribute('data-name');
        previewBox.forEach(preview=>{
            let target=preview.getAttribute('data-target');
            if(name==target){
                preview.classList.add('active')
            }
        });
    };
});