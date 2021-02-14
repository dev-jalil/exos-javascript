///// Typage + Date //////

/** NE PAS FAIRE console.log("null") ou console.log("Object") **/

// --
console.log("2.1 Afficher null à partir d'une variable.");
if (true) points += 5;

// Exemple : null

// Code

let variable1 = "have fun";

console.log(variable1.match("blockchain"));
// Je n'attendais pas tout à fait cela mais le résultat null est là
// Simplement. C'est surtout pour comprendre qu'une variable est null (ou undefined)
// let variable = null;
// console.log(variable);

// console.log(???)

// --
console.log("2.2 Afficher undefined à partir d'une variable.");
if (true) points += 5;

// Exemple : undefined

let nonDefinie;
console.log(nonDefinie);

// Code

// console.log(???)

// --
console.log("2.3 Afficher NaN à partir d'une variable.");
if (true) points += 5;

// Exemple : NaN

console.log(Math.sqrt(-1));

// Code

// console.log(???)

// --
console.log("2.4 Afficher 'objet' à partir d'une variable.");
if (true) points += 5;

// Exemple : Object
let obj = {};
console.log(typeof obj);

// Code

// console.log(???)

// --
console.log("2.5 Afficher 'number' à partir d'une variable.");
if (true) points += 5;

// Exemple : number
console.log(typeof 1);

// Code

// console.log(???)

// --
console.log("2.6 Afficher 'boolean' à partir d'une variable.");
if (true) points += 5;

// Exemple : boolean

// Code
console.log(typeof false);

// console.log(???)

// --
console.log("2.7 Afficher la date d'aujourd'hui au format JJ/MM/AAAA:");
if (true) points += 10;

// Exemple : 08/02/2019
let date = new Date();
let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
let month =
  date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1; //Janvier est en 0
let year = date.getFullYear();
console.log(day + "/" + month + "/" + year);

// Code
