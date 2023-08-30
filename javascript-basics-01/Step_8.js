let age = prompt("please enter your age");

function Age(age) {
    if (age>18){
        return("You Are Over 18");
    }
    else {
        return("You Are Under 18");
    }
};

alert(Age(age));