// Function Constructor

/*
var john = {
    firstName: 'John',
    lastName : 'Smith',
    yearofBirth:1990,
    job:'Teacher'
    
};
*/

/*
var Person = function(firstName,yearofBirth,job){
    this.firstName = firstName;
    
    this.yearofBirth = yearofBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2020 - this.yearofBirth);
    }
}

Person.prototype.lastName = 'Smith';
Person.prototype.calculateAge = function(){
        console.log(2020 - this.yearofBirth);
    };
var john = new Person('John',1990,'Teacher');
john.calculateAge();
console.log(john);
console.log(john.lastName);
*/

//Object.create

/*
var personProto = {
    lastName:'Smith',
    calculateAge : function(){
        console.log(2020- this.yearofBirth);
    }
}


var john = Object.create(personProto);

john.name = 'John';
john.yearofBirth =1990;
john.calculateAge();

*/

/*var jane = Object.create(personProto,{
    name:{value : 'Jane'},
    yearofBirth:{value :1985}
})
jane.calculateAge();*/



/*
 * First Class Functions
*/
// Functions passing as Function arguments

/*var years = [1990,1955,2014,1984,1963,2019];

function calculateArray(array,fn){
    returnResult = []
    for(var i =0; i<array.length;i++){
        returnResult.push(fn(array[i]));
    }
    return returnResult;
}

function calculateAge(year){
    return 2020 - year;
}

var ages = calculateArray(years,calculateAge);
console.log(ages);

function isAdult(age){
    return age>=18?true:false;
}

var adult = calculateArray(ages,isAdult);

console.log(adult);*/


//Functions Returning Functions

function interviewQuestions(job){
    if(job === 'Designer'){
        return function(name){
            console.log('Hey '+name + 'Could you please explain what is UX ?')
        }
    }else if (job === 'Teacher'){
        return function(name){
            console.log('What do you teach ' + name +'?');
        }
    }else{
        return function(name){
            console.log('What do you do ? '+name);
        }
    }
}

var designerQuestion = interviewQuestions('Designer');
designerQuestion('John');
interviewQuestions('Teacher')('Jane');
interviewQuestions('Driver')('Mark');