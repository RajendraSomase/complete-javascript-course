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

/*function interviewQuestions(job){
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
interviewQuestions('Driver')('Mark');*/

//Immediately invoked Functions for data hiding

/*
(function (){
 var score = Math.random() *5;
console.log(score);
 })();

(function(targate){
    var score = Math.random()*5;
    console.log(score >= targate)
})(3);
*/
 

// Closure

/*
function interviewQuestions(job){
    return function(name){
    if(job === 'Designer'){
        return  console.log('Hey '+name + ' Could you please explain what is UX ?');
    }else if (job === 'Teacher'){
        return console.log('What do you teach ' + name +' ?');
        
    }else{
        return console.log('What do you do ? '+name);
        }   
    } 

}

interviewQuestions('Designer')('John');
interviewQuestions('Teacher')('Marry');
interviewQuestions('Driver')('Joseph');
*/


// Bind, Call & apply

/*
var john = {
    name : 'John',
    age : 30,
    job : 'Designer',
    presentation: function(style,timeofDay){
        if(style === 'formal'){
            console.log('Good '+timeofDay+ ' ladies & gentlements! I\'m '+this.name 
                        + '. I\'m a '+this.job+'.'
                       +' and I \'m '+this.age+ ' years old.');
        }else if (style === 'Casual'){
            console.log('Hey whats up guys, I\'m '+this.name 
                        + '. I\'m a '+this.job+'.'
                       +' and I \'m '+this.age+ ' years old.');
        }
    }
}

john.presentation('formal','Morning');
john.presentation('Casual','Evening');

var emily ={
    name: 'Emily',
    age:22,
    job:'Teacher'

}

//john.presentation.call(emily,'Casual','Morning');
//john.presentation.apply(emily,['Casual','Morning']);
john.presentation.bind(emily,'Casual')('Morning');



var years = [1990,1955,2014,1984,1963,2019];

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


function isAdult(limit,age){
    return age >= limit ? true : false;
}

var adult = calculateArray(ages,isAdult.bind(this,35));
console.log(ages);
console.log(adult);
*/
//Bind is used to preset arguments to method


/*******************************************************************
*  CODING CHALLANGE
*/

var Question = function (question,answers,correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    
}

questionCourseTutor = new Question('Who is Tutor for this courese ?',['John','Marry','Jonas'],2);
questionCourseSubject = new Question('What is this courese about ?',['Java','PHP','JavaScript'],2);
questionTodaysDate = new Question('What is todays date ?',['22 Feb 2020','20 Feb 2019','20 Feb 2018'],0)

var questions = [questionCourseTutor,questionCourseSubject,questionTodaysDate];


(function(){
  for(var i =0;i<questions.length;i++){
    var randomNumber = Math.floor(Math.random() * 3);   
      console.log(randomNumber);
     console.log('Question : '+questions[randomNumber].question)
      console.log('0 : '+questions[randomNumber].answers[0]);
      console.log('1 : '+questions[randomNumber].answers[1]);
      console.log('2 : '+questions[randomNumber].answers[2]);
      var answer = prompt(questions[randomNumber].question);
      console.log(answer == questions[i].correctAnswer?'You are correct.':'Wrong Answer.')
  }

})();