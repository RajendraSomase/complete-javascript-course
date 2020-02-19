///////////////////////////////////////
// Lecture: Hoisting

//Function declaration
/*
console.log(1990);
function calculateAge(year){
    return 2020 - year;
}


//Function Expression
//console.log(retirement(1990));
var retirement = function(year){
    return 65 - calculateAge(year);
}
console.log(retirement(1990));

//Variables 
console.log(age);
var age = 30;
console.log(age);

function foo(){
    var age =25;
    console.log(age);
}

foo();
console.log(age);

*/





///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/




// Example to show the differece between execution stack and scope chain


/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a+ ' '+d);
}
*/




///////////////////////////////////////
// Lecture: The this keyword


/*console.log(this);
calculateAge(1984);
function calculateAge(year){
    console.log(2020 - year);
    console.log(this);
}*/

var john = {
    name : 'John Smith',
    birthOfYear:1984,
    calculateAge: function(){
        console.log(2020 - this.birthOfYear);
        console.log(this);
        /*function innerFunction(){
            console.log(this);
        }
        innerFunction();*/
    }
}

john.calculateAge();


var mark = {
    name : 'Marke Miller',
    birthOfYear:1990
}

mark.calculateAge = john.calculateAge;

mark.calculateAge();


