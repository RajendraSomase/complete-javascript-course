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
/*var whatDoYouDo = function(firstName,job){
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
whatDoYouDo('Wilson','Designer');*/


/***********************************************
* Arrays
*/

//Arrays declaration
/*
var names = ['John', 'Mark','Marry'];
var years = new Array(1990,1985,1955);

console.log(names);
console.log(years);
console.log(names[2]);
console.log(years[2]);

//Arrays mutation
names[2] = 'Rajendra';
names[names.length] = 'Dinesh';
console.log(names);

//Arrays with different data types
var john = ['John', 'Smith', 1990, 'Designer'];

console.log(john);
john.push(false);
john.unshift('Mr.')

console.log(john);

john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('Designer') === -1 ? 'John is not Designer': 'John is a Designer';
console.log(isDesigner);
*/


/********************************************
* Coding Challage three

   John & Family went to holiday and they went to 3 diffrent restaurants
   
   Bills are 124, 48 & 268
   
   Tip calculation 
   20% when less that 50
   15% when between 50 to 200
   10% when more than 200
   
   Result;
   1. Array of all three tips,
   2. Array of all three Bills (Bill + Tip)
   */


/*function calculateTip(bill){
    if(bill<50){
        return 20 * (bill/100);
    }else if(bill>=50 && bill<200){
        return 15 * (bill/100);
    }else if(bill >200){
        return 10 * (bill/100);
    }
}

var tipArray = [calculateTip(124),calculateTip(48),calculateTip(268)];
var billArray = [(124+calculateTip(124)),(48+calculateTip(48)),(268+calculateTip(268))];

console.log(tipArray);
console.log(billArray);*/



/****************************************************
** Objects and Properties
*/

// Object Literal
/*
var john = {
    firstName : 'John',
    lastName : 'Smith',
    isMarried : false,
    job : 'Teacher',
    family : ['Mark','Marry']
}

console.log(john);
console.log(john.family)
console.log(john['firstName']);

//Mutation

john.isMarried = true;
john.job = 'Designer';
console.log(john);


//New Object

var jane = new Object();

jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.isMarried = true;
jane['job'] = 'Teacher';

console.log(jane);
*/




/******************************************************
*  Objects & Methods
**/

/*
var john = {
    firstName : 'John',
    lastName : 'Smith',
    isMarried : false,
    job : 'Teacher',
    family : ['Mark','Marry'],
    birthYear:1990,
    calculateAge:function(){
        this.age = 2020 - this.birthYear;
    }
}

console.log(john.calculateAge());
//john.age = john.calculateAge();
console.log(john);
*/


/*  ******* Coding Challange 2
 Mark & John trying to compare BMI
 BMI = mass / height^2 = mass /(height * height)\
 mass in kg and height in meter
1. Define object for both
2. Calculate BMI with method in object also return it in method
*/


var john = {
    name : 'John Smith',
    mass: 90,
    height:1.73,
    calculateBMI : function(){
       this.bmi = this.mass/ (this.height *this.height);
    }
}

john.calculateBMI();
console.log(john);
var mark = {
name : 'Mark Jonas',
mass : 75,
height : 1.55,  
calculateBMI : function(){
    this.bmi = this.mass/ (this.height * this.height);
}
}
mark.calculateBMI();
console.log(mark);


var printWinner = mark.bmi > john.bmi ? (mark.name +' ' +mark.bmi)  : (john.name + john.bmi); 

console.log(' Whose BMI is Higher ?' + printWinner);

