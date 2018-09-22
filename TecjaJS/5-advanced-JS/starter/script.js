const newLocal = [];
/*var andraz = {
    ime: 'Andraž',
    letoRojstva: 1977,
    poklic: 'Ekonomist'
}

var Oseba = function(ime, letoRojstva, poklic) {
    this.ime = ime;
    this.letoRojstva = letoRojstva;
    this.poklic = poklic;
}
Oseba.prototype.izracunLeta = function() {
    console.log(2018 - this.letoRojstva);
}
Oseba.prototype.priimek = 'Bečaj';

var maja = new Oseba('Maja', 1980, 'Pravnica');
var filip = new Oseba('Filip', 2014, 'Otrok');
var andraz = new Oseba('Andraž', 1977, 'Ekonomist');

maja.izracunLeta();
filip.izracunLeta();
andraz.izracunLeta();

console.log(maja.priimek);
console.log(filip.priimek);
console.log(andraz.priimek);

var avto = function(znamka, model, letnik) {
    this.znamka = znamka;
    this.model = model;
    this.letnik = letnik;
}
avto.prototype.starost = function (){
    console.log(2018 - this.letnik);
}

var turbo = new avto('VW', 'Passat', 2000);
turbo.starost();*/




//object.create


/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/



//Primitives vs Objects


/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//functions
var age = 41;
var obj = {
    name: 'Andraž',
    city: 'Domžale'
}

function change(a, b) {
    a = 30;
    b.city = 'Dob';
}

change(age, obj);

console.log(age);
console.log(obj.city);*/



///////////////////////
// Lecture: Passing functionds as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998, 1977];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function cAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, cAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/



///////////////////////////////////
// Lecture: Functions returning functions

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Andraž');
var designerQuestion = interviewQuestion('designer');
designerQuestion('Maja');
designerQuestion('Filip');
designerQuestion('Rok');
designerQuestion('Urh');

interviewQuestion('teacher')('Franci');


function znamka(avto) {
    if (avto === 'zastava') {
        return function (model) {
            console.log(model + ' je najbolj prodajan model v letih 1970-1980.');
        }
    } else if (avto === 'VW') {
        return function (model) {
            console.log('Najbolj kvaliteten je bil ' + model + ' iz tovarne TAS.');
        }
    } else {
        return function (model) {
            console.log('Živjo, ta ' + model + ' pa ne obstaja');
        }
    }
}

var vprasanjeZnamka = znamka('zastava');
vprasanjeZnamka('101');
*/



////////////////////////////////////////
// Lecture: IIFE


/*
function game() {
    var score = Math.random() *10;
    console.log(score >= 5);
}
game();
*/

/*
(function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}());

// Dodam še srečo kot podatek
(function game(sreca) {
    var score = Math.random() * 10;
    console.log(score >= 5 - sreca); //Sreča
}(5)); //Kako velika je ta sreča (Če je 5 je vedno TRUE)
*/



/////////////////////////////////////
// lecture: Closures


/*
function retirement(retirementAge) {
    var a = ' leta do upokojitve.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1977);
retirement(66)(1977);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/
/*
function interviewQuestion(job) {
    return function (name){
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
} 

interviewQuestion()('Andraž');
*/



/////////////////////////////////////
// Lecture: Bind, call and apply


/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and gentelmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m a ' + this.age + ' years old');
        } else if (style === 'friendly') {
            console.log('Hey! What\' up? I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I\'m a ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']); //ne dela ker metoda pročakuje dve spremenljivki in ne array

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('Afternoon');



var years = [1990, 1965, 1937, 2005, 1998, 1977];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function cAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, cAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


/////////////////////////////////
// Coding challenge

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

/*
function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function (odgovor) {
    if (odgovor === this.correctAnswer) {
        console.log('Odgovor je pravilen!');
        score++;
    } else {
        console.log('Odgovor ni pravilen!');
    }
}

var vpr1 = new Question('Is JavaScript the coolest programing language in the world?', ['Yes', 'No'], 0);
var vpr2 = new Question('What is the name of this courses\' teacher?', ['Andraž', 'John', 'Filip', 'Maja', 'Jonas'], 4);
var vpr3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedius'], 2);

var vprasanja = [vpr1, vpr2, vpr3];
var score = 0;

function naslednjeVprasanje() {
    var rndNumber = Math.floor(Math.random() * vprasanja.length);
    vprasanja[rndNumber].displayQuestion();
    var odgovor = prompt('Vaš odgovor je?')//;

    if (odgovor !== 'exit') {
        vprasanja[rndNumber].checkAnswer(parseInt(odgovor));
        console.log('--------------------------')
        console.log('Vas rezultat: ' + score)
        naslednjeVprasanje();
    }

}

naslednjeVprasanje();
*/