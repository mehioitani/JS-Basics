let shoeSize = prompt("please enter your shoe size: ");
let birthYear = prompt("please enter your birth date: ");

function Multiply(shoeSize,birthYear){
    const result = (shoeSize*2 + 5) * 50 - birthYear + 1766;
    return result;
}

alert("the result is:" + Multiply(shoeSize,birthYear));