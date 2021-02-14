///// Math //////

/*
    vous devez utiliser les fonctions Math
*/

// --
console.log("3.1 Afficher la plus grande valeur d'une liste de nombres :");
if (true) points += 5;

// Voici la liste des nombres : 29, 1029, 9, 12, 23, 31, 98, 121
// Exemple 1029

// Code
let arr = [29, 1029, 9, 12, 23, 31, 98, 121];
console.log(Math.max(...arr));

// console.log(???)

// --
console.log(
  "3.2 Afficher un nombre pseudo-aléatoire compris entre 0 (inclus) et 1 (exclu) :"
);
if (true) points += 5;

// Code
console.log(Math.random());

// console.log(???)

// --
var valeur33 = 12.8;
console.log("3.3 Afficher l'arrondi supérieur de " + valeur33 + " :");
if (true) points += 5;

// Code
console.log(Math.ceil(valeur33));

// console.log(???)

// --
var valeur34 = 11.3;
console.log("3.4 Afficher l'arrondi inférieur de " + valeur34 + " :");
if (true) points += 5;

// Code
console.log(Math.floor(valeur34));

// console.log(???)

// -- Contexte
/* 5 amis se sont régalés au restaurant. */
/* L'addition s'élève à 133.50€. */
/* Ils décident de partager la note en 5. */
/* Une seule personne a pris un café à 2.50€. */
/* Une seule personne n'a pas pris de coupe de champagne d'une valeur de 8€ */

console.log("3.5 Calculer et afficher la part de chacun :");
if (true) points += 5; // Au lieu de 10

var total = 133.5;
var cafe = 2.5;
var champagne = 8.0;

// Code
// on calcule un premier montant que tout le monde doit payer d'office égal à 133.5
// moin les 4 champagnes et le café le tout divisé par 5
let average = (133.5 - (2.5 + 8 * 4)) / 5;
let addition = {};
for (let i = 1; i <= 5; i++) {
  addition["personne" + i] = average;
}
addition["personne1"] += 2.5;
for (let i = 1; i < 5; i++) {
  addition["personne" + i] += 8;
}
console.log(addition);

// Le calcul est cohérent. J'aurai aimé sur tu re-utilise au moins les variables de l'énoncé dans tes calculs.
// Cependant, il y avait un piège sur la compréhension de l'énoncé.
// >>> /* Ils décident de partager la note en 5. */
// Autrement dit, les 2 indications "Une seule personne..." sont là pour biaisé la réflexion.
// Il est bien indiqué "Ils décident de partager la note en 5." Pas de calcul compliqué = total / 5 = 26,7
// Je ne mets pas 10 mais 5 points.

// console.log(???)
