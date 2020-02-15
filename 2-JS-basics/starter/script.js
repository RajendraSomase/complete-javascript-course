/*********************
Variables and Data Types
*/
/*var firstName = 'Rajendra'
console.log(firstName);

var lastName = 'Somase'
console.log(lastName);
var age = 35;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Software Engineer';
console.log(job);

// Variable declaration rules
var _2years;
var rajendraDinesh = 'Rajendra and Dinesh';
var $if =0;*/

/*************
Variable Mutation and Type Coercion
*/

//Type Coercion
/*var firstName = 'Rajendra';
var age = 35;

console.log(firstName + ' ' +age);


var job = 'Software Engineer';
isMarried = true;

console.log(firstName + ' is a ' +age+' year old ' + job+'. is He Married '+isMarried);

//Variable Mutation
age = 'Thirty Five';
job = 'Software Artchitecture';

alert(firstName + ' is a ' +age+' year old ' + job+'. is He Married '+isMarried);

var lastNme = prompt('What is his lastName');
console.log(firstName + ' '+lastNme);*/


/* **************************
    Basic Operaters
*/

//Math Operator
/*
var now = 2020;
var ageRajendra = 36;
var ageDinesh = 37;

var yearRajendra = now - ageRajendra;
var yearDinesh = now - ageDinesh;

console.log(yearRajendra);
console.log(yearDinesh);

console.log(now + 2);
console.log(now * 2);
console.log(now/10);

//Logical Operator
var isRajendraOlder = ageRajendra > ageDinesh;
var isRajendraYouger = ageRajendra < ageDinesh;
console.log('isRajendraOlder ' +isRajendraOlder);
console.log('isRajendraYouger ' + isRajendraYouger);


//typeof operator
console.log(typeof isRajendraOlder);
console.log(typeof now);
console.log(typeof 'This is a string');

var x;
var y = null;
console.log(typeof x);
console.log(typeof y);
*/


/******************************************
    Operator Precedence
*/

/*
var fullAge = 18;
var now = 2020;
var yearRajendra = 1984;

//Multiple Operator
var isFullAge = now - yearRajendra >= fullAge; // True
console.log(' IsRajendra FullAge '+isFullAge);

//Groupinn
var ageRajendra =  now - yearRajendra;
var ageDinesh = 37;
var average = (ageDinesh + ageRajendra) / 2;
console.log(average);


//Multiple Assignements
var x,y;
x = y = (3 + 5) * 4 - 6 // 8 * 4 -6 // 32 - 6 // 26

console.log(x);
console.log(x,y);

//More Operators
x *= 2; //x = x * 2;
console.log(x);
x += 10; //x= x+ 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);*/


/*  ******* Coding Challange 1
 Rajendra & Dinesh trying to compare BMI
 BMI = mass / height^2 = mass /(height * height)\
 mass in kg and height in meter

*/

/*
var massRajendra = 90;
var massDinesh = 75;
var heightRajendra = 1.73;
var heightDinesh = 1.55;

var bmiRajendra = massRajendra / (heightRajendra * heightRajendra);
var bmiDinesh = massDinesh / (heightDinesh * heightDinesh);

console.log(' bmiRajendra ' +bmiRajendra);
console.log(' bmiDinesh '+ bmiDinesh);
console.log(bmiRajendra,bmiDinesh);

var isRajendraHighBMI = bmiRajendra >= bmiDinesh;

console.log(' Is Rajendra\'s BMI higher than Dinesh\'s ?' + isRajendraHighBMI );


*/


/*****************************
*  If/else statement
*/

/*
var firstName = 'John';
var civilStatus = 'Single'

if(civilStatus === 'Married'){
    console.log(firstName + ' is Married' );
}else{
    console.log(firstName + ' will Hopefully Marry soon :)');
}


var isMarried = true

if(isMarried){
    console.log(firstName + ' is Married' );
}else{
    console.log(firstName + ' will Hopefully Marry soon :)');
}

var massRajendra = 90;
var massDinesh = 75;
var heightRajendra = 1.73;
var heightDinesh = 1.55;

var bmiRajendra = massRajendra / (heightRajendra * heightRajendra);
var bmiDinesh = massDinesh / (heightDinesh * heightDinesh);

console.log(' bmiRajendra ' +bmiRajendra);
console.log(' bmiDinesh '+ bmiDinesh);
console.log(bmiRajendra,bmiDinesh);

if(bmiRajendra>bmiDinesh){
        console.log('Rajendra\'s BMI higher than Dinesh\'s BMI');
   }else{
        console.log('Dinesh\'s  BMI higher than Rajendra\'s BMI' );
   }

*/


/* *******************************
*  Boolean Logic
*/

/*var firstName = 'John';
var age = 35;

if(age < 13){
    console.log(firstName + ' ia a Boy');

}else if (age >=13 && age < 20){
    console.log(firstName + ' ia a Teanager');
    
}else if (age >=20 && age <30 ){
    console.log(firstName + ' ia a young man');
    
}else {
    console.log(firstName + ' ia a man');
}*/


/* ******************************
*  Ternery operator and Switch statement
*/

/*
var firstNmae = 'John';
var age = 15;

//Ternery Operator
age >=18 ? console.log(firstNmae + ' drinks Beer'):console.log(firstNmae + ' drinks juice')

firstNmae = 'Mark'
age = 24;
var drink = age>=18 ? 'Beer':'Juice';
console.log (firstNmae + ' drinks '+drink);

// Switch Statement

var job = 'Cop'

switch(job){
        
    case 'Teacher': console.log(firstNmae +' teaches student how to code');
        break;
    case 'Instructer':console.log(firstNmae+ ' instruct developer how to fix issues');
        break;
    case 'Driver': console.log(firstNmae + ' drives a cab');
        break;
    default: console.log(firstNmae +' does something else');
}
*/


/***************************************
* Truthy & Falsy values and equality operators
*/
/*

//Falsy values undefined, null, '', 0 , NaN
//Truthy values not falsy values


var height = 30;

if(height || height === 0){
    console.log("Variable is defined");
}else{
    console.log("Variable is not defined");
}

//Equality operator
if(height === '30'){
    console.log(' The == operator does type coercion')
}*/


/*  ******* Coding Challange 2
  Mike & John plays for diffrent team.
  Mike last three games 116,94,123
  John last three games  89,120,103

1. Calculate average score for each team
2. Decide which team wins in average & print winner in console
3. change the score, as diffrent team can win and also conside draw
4. Marry also plays and score 97,134 and 105
5. change score
*/

/*
var johnAverage = (89+120+103)/3;
var mikeAverage = (116+94+123)/3;


console.log('John\'s Average '+johnAverage);
console.log('Mike\'s Average '+mikeAverage);



if(johnAverage>mikeAverage){
    console.log(' John is winner score is '+johnAverage);
}else{
    console.log(' Mike is a winner score is '+mikeAverage);
}

var marryAverage = (97+134+105)/3;
console.log('Marry\'s Average '+marryAverage);

if(johnAverage>mikeAverage && johnAverage>marryAverage){
    console.log(' John is winner score is '+johnAverage);
}else if(johnAverage<mikeAverage && mikeAverage > marryAverage){
    console.log(' Mike is a winner score is '+mikeAverage);
}else if(marryAverage>johnAverage && marryAverage>mikeAverage){
    console.log(' Marry is a winner score is '+marryAverage);
}else{
    console.log(' There is a draw');
}
*/

/************************************
*  Functions
*/
/*function calculateAge(year){
    return 2020 - year;
}

var ageJohn = calculateAge(1984)
var ageMike = calculateAge(1990);
var ageMarry = calculateAge(1955);

console.log(' Age of John '+ageJohn);
console.log(' Age of Mike '+ageMike);
console.log(' Age of Marry '+ageMarry);

function yearsUntilRetirement(firstName,year){
    var age = calculateAge(year);
    var retirement = 60 - age;
    if(retirement>0){
        console.log(firstName +' retires in '+ retirement +' years');    
    }else{
        console.log(firstName +' already retired');
    }
    
}

yearsUntilRetirement('John', 1984);
yearsUntilRetirement('Mike', 1990);
yearsUntilRetirement('Marry', 1955);*/


/********************************************
* Function statement & expressions
*/

//Function Expression
var whatDoYouDo = function(firstName,job){
    switch(job){
            
        case 'Teacher' :return  console.log(firstName + ' Teaches students how to code');
        case 'Driver'  :return console.log(firstName + ' Drives a cab');
        case 'Designer':return console.log(firstName + ' Designes an beautiful websites');
        default: return console.log(firstName + ' Does something else');    
            
    }
}   

whatDoYouDo('John','Teacher');
whatDoYouDo('Mike','Cop');
whatDoYouDo('Marry','Driver');
whatDoYouDo('Wilson','Designer');