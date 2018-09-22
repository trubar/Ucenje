/*******************
 * Spremeljivke
 * 
 */
/*
var firstName = 'Andraž';
console.log(firstName);

var priimek = 'Bečaj';
var leta = 42;

var polnoLeten = true;
console.log(polnoLeten);

var sluzba;
console.log(sluzba);

sluzba = 'DHL';
console.log(sluzba);

/***
 * 
 * Novo poglavje
 */

/*
var ime = 'Andraž';
var starost = 42;

console.log(ime + ' ' + starost);

var sluzba, jePorocen;
sluzba = 'učitelj';
jePorocen = false;

console.log(ime + ' je ' + starost + ' let star ' + sluzba + '. Ali je poročen? ' + jePorocen);

//Variable mutation

starost = 'twenty eight';
sluzba = 'voznik';

//alert(ime + ' je ' + starost + ' let star ' + sluzba + '. Ali je poročen? ' + jePorocen);
var priimek = prompt('Kaj je njegov priimek?');
console.log(ime + ' ' + priimek);
*/

/****
 * 
 * 
 * Basic Operator
 */

/*

var now, yearJohn, yearMaja
now = 2018;
ageJohn = 41;
ageMaja = 38;

//Math operators (Matematični operatorji)
yearJohn = now - ageJohn;
yearMaja = now - ageMaja;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical operators (Logični operaterji)
var johnOlder = ageJohn < ageMaja;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'ageJohn');
var x;
console.log(typeof x);

*/

/**************************
 * Operator precedence (Kateri znake se izvršijo prej)
 */

/*
var now = 2018;
var yearJohn = 1977;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true (Najprej minus potem >= in nato se =)
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMaja = 38;
var average = (ageJohn + ageMaja) / 2;
console.log(average);

// Multiple assigments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++ // x = x + 1 // x += 1
console.log(x);

*/

/**************************
 * Coding challenge 1
 */
/*

var massJohn, massMark, heightJohn, heightMark;
massJohn = 90;
massMark = 80;
heightJohn = 1.8;
heightMark = 1.7;

var bmiMark = massMark / heightMark^2;
var bmiJohn = massJohn / heightJohn^2;

var jeVecji = bmiMark < bmiJohn;

console.log('Ali je John BMI večji od Markovega? ' + jeVecji);

*/

/* *******  Testiranje *********
console.log(bmiJohn);
console.log(bmiMark);
console.log(jeVecji);
*/

/*************************
 * If / else statements
 */
/*
 var ime = 'Andraž';
 var zakonskiStatus = 'samski';

 if (zakonskiStatus === 'porocen') {
     console.log(ime + ' je poročen');
 } else {
     console.log(ime + ' ni poročen');
 }

 var zakonskiStatus = true;
 if (zakonskiStatus) {
    console.log(ime + ' je poročen');
} else {
    console.log(ime + ' ni poročen');
}
*/
/**************************
 * The Ternary Operator and Switch Statementa
 * 
 *  
 * 
 */

/*
 var firstName = 'John';
 var age = 12;

 //Ternary Operator
 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch ststement
/*var sluzba = 'policaj';

switch (sluzba) {
    case 'teacher':
    case 'instruktor':
        console.log(firstName + ' uči otrike programirati');
        break;
    case 'voznik':
        console.log(firstName + ' vozi avtomobil');
        break;
    case 'oblikovalec':
        console.log(firstName + ' oblikuje web strani');
        break;
    default:
        console.log(firstName + ' dela nekaj drugega');
}

age = 56;
switch (true) {
    case age < 13: //if true....
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20: //if true.....
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    case age >= 30:
        console.log(firstName + ' is a man');
        break;
    default:
    break;
}*/

/*******************
 * Truthy and Faslsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equalty operator
if (height == '23') {
    console.log('Operator == je naredil pretvorbo spremenjljivke!');
}*/

/*********
 * Coding challenge 2
 */
/*
var teamJohnAvgScore = (89 + 120 + 103) / 3;
var teamMikeAvgScore = (116 + 94 + 123) / 3;
var teamMaryAvgScore = (97 + 134 + 102) / 3;

console.log(teamJohnAvgScore, teamMikeAvgScore, teamMaryAvgScore);*/
/*
if (teamJohnAvgScore > teamMikeAvgScore) {
    console.log('Zmagovalec je moštvo John iz povprečjem ' + teamJohnAvgScore);
} else if (teamMikeAvgScore > teamJohnAvgScore) {
    console.log('Zmagovalec je moštvo Mike iz povprečjem ' + teamMikeAvgScore);
} else {
    console.log('Rezultat je neodločen ' + teamJohnAvgScore + ':' + teamMikeAvgScore);
}*/

/*if (teamJohnAvgScore > teamMikeAvgScore && teamJohnAvgScore > teamMaryAvgScore) {
    console.log('Zmagovalec je moštvo John iz povprečjem ' + teamJohnAvgScore+ ' točk');
} else if (teamMikeAvgScore > teamJohnAvgScore && teamMikeAvgScore > teamMaryAvgScore) {
    console.log('Zmagovalec je moštvo Mike iz povprečjem ' + teamMikeAvgScore + ' točk');
} else if (teamMaryAvgScore > teamJohnAvgScore && teamMaryAvgScore > teamMikeAvgScore) {
    console.log('Zmagovalec je moštvo Mary iz povprečjem ' + teamMaryAvgScore+ ' točk');
} else {
    console.log('Rezultat je neodločen');
}*/

/*************************
 * Functions
 */

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1977);
var ageMaja = calculateAge(1980);
var ageFilip = calculateAge(2015);

console.log(ageJohn, ageMaja, ageFilip);

function letaDoUpokojitve(rojstvo, ime) {
    var starost = calculateAge(rojstvo);
    var upokojitev = 65 - starost;
    console.log(ime + ' se upokoji cez ' + upokojitev + ' let');
}


letaDoUpokojitve(1977, 'Andraž');
letaDoUpokojitve(1980, 'Maja');
letaDoUpokojitve(2015, 'Filip');*/

/***********************
 * Function Statements and expressions
 */
// Function declaration
// function whatDoYouDo (job, firstName) {}


// Function expression
/*var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'; //Če je return ne potrebujem break ker se takoj prekine
        case 'driver':
            return firstName + ' drives uber';
        case 'designer':
            return firstName + ' makes web pages';
        default:
            return firstName + ' does something elese';
    }
}

console.log(whatDoYouDo('teacher', 'Andraž'));
console.log(whatDoYouDo('driver', 'Andraž'));
console.log(whatDoYouDo('designer', 'Andraž'));*/

/********************
 * Arrays
 */

//Initialize new array
/*var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23)); // vrne -1 ker ne obstaja

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is designer';
console.log(isDesigner);*/

/****************
 * coding chalaenge 3
 */

/*var racuni = [124, 48, 268];

function napitnina(racun) {
    if (racun < 50) {
        return racun * 0.2;
    } else if (racun >= 50 && racun < 200) {
        return racun * 0.15;
    } else {
        return racun * 0.1;
    }
}


//var napitnine = new Array (napitnina(124), napitnina(48),napitnina(268));
//var napitnine = new Array (napitnina(racuni[0]));
var napitnine = [napitnina(racuni[0]), napitnina(racuni[1]),napitnina(racuni[2])];
var skupaj = [napitnine[0]+racuni[0], napitnine[1]+racuni[1], napitnine[2]+racuni[2],]


console.log(napitnine);
console.log(skupaj);*/

/************************
 * Objects and properties
 */

//Object literal
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.family);
var x = 'birthYear';
console.log(john['lastName']);
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);*/

/*****************************
 * Objects and methods
 */

/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) { //metoda je funkcijs v objektu
       // return 2018 - this.birthYear; //to meni da se uporabi birthYear iz tega objekta
        this.age = 2018 - this.birthYear; // namesto return lahko dodamo age tudi tako
    }
};

//console.log(john.calcAge());

var age = john.calcAge();
console.log(age)
console.log(john);*/

/***********************
 * Coding Challenge 4
 */

/*var John = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    mass: 92,
    height: 1.78,
    BMI: function() {
        return this.mass / (this.height * this.height);
    }
};

var Mark = {
    firstName: 'Mark',
    lastName: 'Jones',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    mass: 90,
    height: 1.78,
    BMI: function() {
        return this.mass / (this.height * this.height);
    }
};

if (John.BMI() > Mark.BMI()) {
    console.log(John.fullName() + ' with ' + John.BMI() + ' has bigger BMI than ' + Mark.fullName());
} else if (Mark.BMI() > John.BMI()) {
    console.log(Mark.fullName() + ' with ' + Mark.BMI() + ' has bigger BMI than ' + John.fullName());
} else {
    console.log('Draw in BMI')
};


// Kako je v tečaju urejeno

var John = {
    firstName: 'John',
    lastName: 'Smith',
    getFullName: function() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },
    mass: 92,
    height: 1.78,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

John.calcBMI(); // Dokler ne pokličem metode ni vrednosti v objektu
John.getFullName();

//Ali pa tako
if (John.BMI() > Mark.BMI()) { // Lahko tudi tu kličem in potem zgornjih 2 vrstic ne rabim...
    console.log(John.fullName + ' has a higher BMI of ' + John.BMI);
} else .......

console.log(John);*/

/******************
 * loops and iterations
 */
/*
//For loop
for (var i = 1; i <= 5 ; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false, 'Blue'];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//Enaka stvar While loop
i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}*/


// continue and break ststemants

/*var john = ['John', 'Smith', 1990, 'teacher', false, 'Blue'];

for (var i = 0; i > john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//Looping od zadnjega do prvega
for (var i = john.length; i >= 0; i--) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}*/

/*****************
 * Coding challenge 5
 */
/*
 var john = {
     bills: [124, 48, 268, 180, 42],
     calcTip: function() {
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tip[i] = this.bills[i] * 0.2;
                this.sum[i] = this.bills[i] + this.tip[i];
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                this.tip[i] = this.bills[i] * 0.15;
                this.sum[i] = this.bills[i] + this.tip[i];
            } else {
                this.tip[i] = this.bills[i] * 0.1;
                this.sum[i] = this.bills[i] + this.tip[i];
            }
        }
     },
     tip: [],
     sum: []
 };

john.calcTip();
console.log(john);

//Rešitev je enaka samo malo drugačana:
/*var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tips = [];
        this.sum = [];

        for (i = 0; i > this.bills.length; i++){

            // Izračunam procent napitinine
            var procent;
            var racun;

            if (racun < 50) {
                procent = .2;
            } else if (racun >= 50 && racun < 200) {
                procent = .15;
            } else {
                procent = .1;
            }

            //Oddam vrednosti v array

            this.tips[i] = racun * procent;
            this.sum[i] = racun + racun * procent;
        }
    }
};*/
/*
var Mark = {
    bills: [77, 375, 110, 45],
    calcTip: function() {
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tip[i] = this.bills[i] * 0.2;
                this.sum[i] = this.bills[i] + this.tip[i];
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                this.tip[i] = this.bills[i] * 0.1;
                this.sum[i] = this.bills[i] + this.tip[i];
            } else {
                this.tip[i] = this.bills[i] * 0.25;
                this.sum[i] = this.bills[i] + this.tip[i];
            }
        }
     },
     tip: [],
     sum: []
};

Mark.calcTip();
console.log(Mark);

var avgMark = function() {
    var sum = 0;
    for (i = 0; i < Mark.tip.length; i++) {
       sum += Mark.tip[i]; 
    };
    return sum / Mark.tip.length;
};

var avgJohn = function() {
    var sum = 0;
    for (i = 0; i < john.tip.length; i++) {
       sum += john.tip[i]; 
    };
    return sum / john.tip.length;
};

if (avgJohn() > avgMark()) {
    console.log('Več je dal John ' + avgJohn());
} else if (avgJohn() < avgMark()) {
    console.log('Več je dal Mark ' + avgMark());
} else {
    console.log('Oboji so dali enako')
};

/******
 * reštev 5.1
 */

/*function calcAverge(tip) {
    var sum = 0;
    for (i = 0; i < tip.length; i++) {
       sum += tip[i]; 
    };
    return sum / tip.length;
}

john.average = calcAverge(john.tip);
Mark.average = calcAverge(Mark.tip);
console.log(john, Mark);
/*
name = [Mark, john];
var avgJohn, avgMark;
var avg = function(name) {
    var sum = 0;
    for (i = 0; i < name.tip.length; i++) {
       sum += name.tip[i]; 
    };
    return sum / name.tip.length;
};
*/
/*
var i = 0;
function pozdrav() {
    console.log('Živjo ' + i)
    i++;
};

var domStrings = {
    inputBtn: 'gumb'
};

function zazeniEventListenerje () {
    document.getElementById(domStrings.inputBtn).addEventListener('click', pozdrav);
};

function init() {
    i = 0;
    console.log('Prva aplikacija deluje :).....')
    zazeniEventListenerje();
};

init();
*/

// let firstName = 'Andraž';

// console.log(`To pa je naš ${firstName}.`)


function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    let num;
    if (Number.isInteger(Math.sqrt(sq))) {
      num = Math.sqrt(sq) + 1;
      num *= num;
      return num;
    } else {
    return -1;
    }
  }