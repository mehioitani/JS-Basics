let image = document.getElementById("image1");
let revertToOriginal = image.style.border;

image.addEventListener('mouseover',()=>{
    image.style.border = "3px solid red";
});

image.addEventListener('mouseout',()=>{
    image.style.border=revertToOriginal;
});