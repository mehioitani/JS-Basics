let greenColor = document.querySelector('.green');
let blueColor = document.querySelector('.blue');
let redColor = document.querySelector('.red');
let text = document.getElementById('text');

function changeColor(){
    if(this===greenColor){
text.style.color='green';
    }
    else if (this===blueColor){
        text.style.color='blue';
    }
    else if (this===redColor){
        text.style.color='red';
    }
};

greenColor.addEventListener('click',changeColor);
blueColor.addEventListener('click',changeColor);
redColor.addEventListener('click',changeColor);

