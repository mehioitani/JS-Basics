let imgs = document.querySelectorAll('img');
let index =0;
imgs.forEach((image) => {
image.addEventListener("mouseover",()=>{
    
    image.src = `images/image${(index + 1)}.jpg`;
    index = (index + 1) % imgs.length;
});
});

