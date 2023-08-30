let section = document.querySelector('div');
let input1 = document.querySelector('input');

input1.addEventListener("input", function(){
    section.textContent = input1.value ;
})