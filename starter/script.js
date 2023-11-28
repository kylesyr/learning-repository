/*

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Kyle');
console.log(30);

let firstName = "Kyle";
let age = 30;
console.log(firstName, age);

// Variable name conventions
let person = 'Kyle';
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 30);
// console.log(typeof 'Kyle');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1993;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Syriste';
console.log(lastName);


// Math operators
const now = 2037;
const ageKyle = now - 1993;
const ageSarah = now - 2018;
console.log(ageKyle, ageSarah);

console.log(ageKyle * 2, ageKyle / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Kyle';
const lastName = 'Syriste';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

//Comparison operators
console.log(ageKyle > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1993 > now - 2019);

const now = 2037;
const ageKyle = now - 1993;
const ageSarah = now - 2018;

console.log(now - 1993 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageKyle + ageSarah) / 2;
console.log(ageKyle, ageSarah, averageAge);

const massKyle = 95;
const heightKyle = 1.80;
const kyleBMI = Math.round(massKyle / heightKyle ** 2);

console.log('Kyle:' + kyleBMI + '%');

const firstName = 'Kyle';
const job = 'Full-Stack Engineer';
const birthYear = 1993;
const year = 2023;

const kyle = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(kyle);

const kyleNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(kyleNew);

console.log(`String
multiple
lines
together`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

const birthYear = 1993;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.66;

const BMIMark = Math.round(massMark / heightMark ** 2);
const BMIJohn = Math.round(massJohn / heightJohn ** 2);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}%) is higher than John's (${BMIJohn}%)!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
};


// type conversion
const inputYear = '1993';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; // '11'
n = n - 1; // '10'
console.log(n);


// 5 falsy values: 0, '', undefined, null. NaN 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kyle'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log('Yay! Height is definied');
} else {
    console.log('Height is UNDEFINED');
}

*/

const age = '18';
if (age === 18) console.log("You just became an adult! (strict)");

if (age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool, 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is ALSO a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
};

if (favourite !== 23) console.log('Why not 23?')