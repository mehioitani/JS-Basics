let anchor = document.getElementById('hide');
let anchor1 = document.getElementById('show');
let paragraph = document.getElementById('texte');

// anchor.addEventListener('click',(event) => {
//     let action = event.target.getAttribute('data-action');

//     if(action ==='show'){
//         paragraph.style.visibility='visible';
//     }
//     else if (action === 'hide'){
//         paragraph.style.visibility='hidden';
//     }
// });


function visibility(){
    if(this === anchor){
        paragraph.style.visibility ='hidden';
    }
    else if(this === anchor1){
        paragraph.style.visibility='visible';
    }
};

anchor.addEventListener('click',visibility);
anchor1.addEventListener('click',visibility);


