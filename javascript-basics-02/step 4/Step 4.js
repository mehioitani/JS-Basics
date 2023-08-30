let input1 = document.querySelectorAll('input');
let button = document.querySelector('button');

button.addEventListener("click", function(){
 let question = confirm("are you sure do you want to reset the form and clear all fields");

    if(question === true){
        input1.forEach(input=>{input.value=""});
    
}
})
