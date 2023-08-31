let password = document.getElementById('password');
let confirmation = document.getElementById('confirmation');

function changeColor(){
    if(password.value!==confirmation.value){
        password.style.borderColor='red';
        confirmation.style.borderColor='red';
    }else{
        password.style.borderColor='black';
        confirmation.style.borderColor='black';
    }
};
