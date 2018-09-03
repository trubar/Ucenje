/*
const letnice = [1977, 1980, 2014];

let leta = letnice.map(el => 2018 - el); // iz enim parametrom

console.log(leta);

//leta = letnice.map((el, index) => `Zapis št ${index}: ${2018 - el} let`); //iz več parametr//i

console.log(leta);

leta = letnice.map((el, index) => { //želim več kot eno vrstico kode rabim {} oklepaje in "return" na koncu
    const sedaj = new Date().getFullage();
    const letedaj - el;
    console.log(age);

    const obj {
        firstName = 'John',
        lastName = 'Smith'
    };

    const {firstName, lastName} = obj;

    console.log(firstName);
    console.log(lastName);
    return `Zapis št ${index + 1/* Dodam še + 1*/
/*}: ${leta} let`;
});

console.log(leta);*/



/**
 * Arrow functions 2 del
 * 
 */




//JS5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        //Ker this ne deluje moramo definirati self spremenljivko da deluje

        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'Številka tega kvadrata je ' + self.position + ' in je ' + self.color + ' barve.';
            alert(str);
        });
    }
};
//box5.clickMe();

//JS6

const box6 = {
    color: 'zelene',
    position: 1,
    clickMe: function () {

        document.querySelector('.green').addEventListener('click', () => {
            // Pri JS6 lahko uporabimo besedo this
            var str = 'Številka tega kvadrata je ' + this.position + ' in je ' + this.color + ' barve.';
            alert(str);
        });
    }
};
box6.clickMe();
*/

/*
//JS6 dve arrow funkciji
const box66 = {
    color: 'zelene',
    position: 1,
    clickMe: () => { // zamenjam function () iz arrow

        document.querySelector('.green').addEventListener('click', () => {
            // in zopet ne deluje ker zopet pobira this is global (Window okolja);
            var str = 'Številka tega kvadrata je ' + this.position + ' in je ' + this.color + ' barve.';
            alert(str);
        });
    }
};
box66.clickMe();
*/

/*
function Person(name) {
    this.name = name;
}

// JS5
Person.prototype.myFirends5 = function (firends) {
    var arr = firends.map(function (el) {
        return this.name + ' je prijatelj iz ' + el;
    }.bind(this));// Ker nemorem dostopati do this besede jo lahko tudi bindam (ustvarim novo kopijo funkcije...)

    console.log(arr);
};

var firends = ['Tinče', 'Grgo', 'Drago'];
new Person('Andraž').myFirends5(firends);

// JS6 => ES6

Person.prototype.myFirends6 = function (firends) {

    let arr = firends.map(el => `${this.name} je prijatelj iz ${el}`);
    console.log(arr);

}; 

new Person('Maja').myFirends6(firends);
*/



/**
 *  
 *  Destructioning
 */
/*


 // ES5

 var john = ['John', 26];
 //var name = john[0];
 //var age = john[1];

 // ES6

 const [name, age] = ['John', 26];
 console.log(name);
 console.log(age);

 const obj = {
     firstName: 'John',
     lastName: 'Smith'
 };

 const {firstName, lastName} = obj;
 console.log(firstName);
 console.log(lastName);

 const {firstName: ime, lastName: priimek} = obj;
 console.log(ime);
 console.log(priimek);

 function calcAgeRetirement(year) {
     const age = new Date().getFullYear() - year;
     return [age, 65 - age];
 };

 const [age2, retirement] = calcAgeRetirement(1977);
 console.log(age2);
 console.log(retirement);
 */



/**
 *              Arrays
 */




/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (item) {
    item.style.backgroundColor = 'dodgerblue';
});


// ES6

const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(item => item.style.backgroundColor = 'dodgerblue');

// ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue; //continue teče dalje break pa bi prekinil. Hočemo menjati samo prvi in tretji okenček
        //break;
    }

    boxesArr5[i].textContent = 'Zamenjan sem v modrega!';
};
*/
// ES6
/*
for (const cur of boxesArr6) { //Kdaj rabimo continue ali break in takrt uporabimo for if
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'Zamenjan sem v modrega!';
};

// ES5
var ages = [12, 17, 8, 21, 14, 11, 30];

var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);
// Rabim ugotoviti kje se polnoletni nahaja zato potrebujem index
console.log(full.indexOf(true));
// Če pa rabim vedeti koliko je star:
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

const polnoletni = [];
const polnoletniI = [];
const mladoletni = [];
const mladoletniI = [];
for (const cur of ages) {
    if (cur >= 18) {
        polnoletniI.push(ages.indexOf(cur));
        polnoletni.push(cur);
        
    } else {
        mladoletniI.push(ages.indexOf(cur));
        mladoletni.push(cur);
        
    };
};
console.log(`Index: ${polnoletniI} ima vrednost: ${polnoletni}`);
console.log(`Index: ${mladoletniI} ima vrednost: ${mladoletni}`);
*/

/**
 * Spread operator
 */

/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

//const bigFamily = [...familySmith,...familyMiller];
const bigFamily = [...familySmith, 'Filip', ...familyMiller];
bigFamily.push('Andraž');
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'white');
*/


/**
 * 
 * ***  Rest parameters
 * 
 */



/*
// ES5

function isFullAge5() {
   ///console.log(arguments);
   //Ker je objekt naredim array
   var argArr = Array.prototype.slice.call(arguments);

   argArr.forEach(function(cur) {
       var year = new Date().getFullYear();
       console.log(year);
       console.log((year - cur) >= 18);
   });
       

};

//isFullAge5(1990, 1991, 1965, 2014);

// ES6

function isFullAge6(...years){
   years.forEach(cur => console.log((2018 - cur) >= 18));
};

isFullAge6(1990, 1991, 1965, 2014);
*/
/*
// ES5

function isFullAge5(limit) {
    //console.log(arguments);
    //Ker je objekt naredim array
    var argArr = Array.prototype.slice.call(arguments, 1); // Dodam .(arguments, 1) 1 pomeni da zacnem pri indexu 1 in ne nič

    argArr.forEach(function(cur) {
        var year = new Date().getFullYear();
        console.log((year - cur) >= limit);
    });
        

};

//isFullAge5(25, 1990, 1999, 1965, 2014);

// ES6

function isFullAge6(limit, ...years){
    years.forEach(cur => console.log((2018 - cur) >= limit));
};

isFullAge6(16, 1990, 1999, 1965, 2014);
*/


/**
 * 
 *      Default parameters
 * 
 */



/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', '1990');
var emily = new SmithPerson('Emily', 1987, 'Diaz', 'Spanish');
*/
/*
// ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1987, 'Diaz', 'Spanish');
*/


/**
 * 
 *      Maps
 * 
 */



/*
const question = new Map();
question.set('question', 'Katero je uradno ime zadnje izdaje JavaSripta?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Pravilen odgovor :D');
question.set(false, 'Odgovor je žal napačen, probajte znova');

console.log(question.get('question'));
//console.log(`Število zapisov je: ${question.size}`);

if (question.has(4)) {
    //question.delete(4);
    //console.log('Odgovor 4 je tu!');
};

//question.clear();

//question.forEach((value, key) => console.log(`To je ključ: ${key}. In to je vrednost: ${value}.`));

//For of loop

for (let [key, value] of question.entries()) {
    if (typeof(key)=== 'number') {
        console.log(`Odgovor ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Napišite pravilni odgovor'));

console.log(question.get(ans === question.get('correct')));
*/


/**
 * 
 *          Classes 
 * 
 */

/*
// ES5

var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'Teacher');

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Pozdravljen!')
    }
}

const john6 = new Person6('John', 1990, 'Teacher');
*/

/**
 * 
 *      Classes and subclasses
 * 
 */

/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

//Nora biti za to vrstico, kjer povežemo oba constructorja!
Athlete5.prototype.wonMedals = function () {
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('Jonh', 1990, 'Swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedals();

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedals(){
        this.medals++;
        console.log(this.medals);
    }
};


var johnAthlete6 = new Athlete6('John', 1986, 'Runner', 3,5);

johnAthlete6.calculateAge();
johnAthlete6.wonMedals();
*/

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

// Naredim parke in ceste
class TownElemnt {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class Park extends TownElemnt {
    constructor(name, buildYear, trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }
    treeDensity() {
        return (this.trees / this.area);
    }
};

class Street extends TownElemnt {
    constructor(name, buildYear, stLength) {
        super(name, buildYear);
        this.stLength = stLength;
    }
};

const park1 = new Park('Češminov', 2010, 50, 6);
const park2 = new Park('Občinski', 1856, 20, 2);
const park3 = new Park('Lipice', 1640, 110, 1.5);

const street1 = new Street('Trubarjeva', 1942, 230);
const street2 = new Street('Ljubljanska', 1852, 2000);
const street3 = new Street('Krtina', 2014, 200);
const street4 = new Street('Taborska', 1945, 150);

console.log('----- POROČILO PARKI ----');

let ages = [];
const parks = [park1, park2, park3];
parks.forEach(function (cur) {
    console.log(`${cur.name} park ima gostoto dreves ${cur.treeDensity()} na km^2`);
    ages.push(new Date().getFullYear() - cur.buildYear);
});


let sumAges = 0
ages.forEach(function (cur) {
    sumAges += cur;
});

console.log(`Povprečna starost parkov je ${sumAges / parks.length} let.`);


parks.forEach(function (cur) {
    if (cur.trees >= 100) {
        console.log(`${cur.name} park ima več kot 100 dreves. Ima ${cur.trees} dreves.`);
    }
});

//console.log(`Povprečna starost parkov je: ${avrAge}`);

console.log('----- POROČILO ULICE ----');

const streets = [street1, street2, street3, street4];
