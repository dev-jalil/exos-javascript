///// String //////

/** NE PAS FAIRE console.log("null") ou console.log("Object") **/

// --
console.log("1.1 Afficher la longueur du string contenu dans la variable str.");
if (true) points += 5;

// Exemple : 9

let str11 = "Have fun!";

// Code

console.log(str11.length);

// --
console.log(
  "1.2 Afficher 'Trouvé!' si le terme 'fun' est contenu dans la phrase suivante."
);
if (true) points += 5;

// Exemple : 9

let str12 = "Have fun!";

// Code

// console.log(???)
if (str12.includes("fun")) console.log("Trouvé!");
// Or if (str12.indexOf("fun") != -1) console.log("Trouvé!");

// --
console.log(
  "1.3 Tester sur le terme 'fun' est contenu dans la phrase suivante."
);
if (true) points += 5;

// Exemple :

let str13 = "Have fun!";

// Code
console.log(str13.includes("fun"));

// --
console.log(
  "1.4 Afficher uniquement sur le terme 'fun' contenu dans la phrase suivante."
);
if (false) points += 5;

// Exemple : fun

let str14 = "Have fun!";

// Code
if (str12.includes("fun")) console.log("fun");

// Pas tout à fait !
// Il faut utiliser indexOf https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf
// Et la longueur de "fun" pour récupérer l'occurence "fun" dans la phrase grâce à https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/substring

// console.log(???)
