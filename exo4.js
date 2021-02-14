///// Boucle/While/Switch //////

/*
    vous devez utiliser les fonctions Math
*/

// --
console.log("4.1 Afficher uniquement les nombres pairs :");
if (true) points += 10;

let array41 = [29, 1029, 9, 12, 23, 31, 98, 121];

// Code
console.log(array41.filter((a) => a % 2 == 0));

// console.log(???)

// --
console.log(
  "4.2 Afficher les chiffres tant que le nombre est strictement supérieur à 10 :"
);
if (true) points += 10;

let array42 = [29, 30, 18, 10, 23, 31, 98, 121];
let i42 = 0;
// Code

for (let nb of array42) {
  if (nb > 10) {
    console.log(nb);
  } else {
    break;
  }
}

// L'indice est dans l'énoncé. "Tant que" >> boucle While
// Ton résultat est bon mais pas optimisé.
// while (array42[i42] > 10 && i42 < array42.length) {
//   console.log(array42[i42]);
//   i42++;
// }

console.log("4.3 Afficher 'pair' ou 'impair' selon si le nombre du tableau :");
if (true) points += 15;

/* Astuce : vous pouvez récupérer le script du 4.1  */
let array43 = [29, 30, 18, 10, 23, 31, 98, 121];

for (let i in array43) {
  console.log(array43[i] % 2 == 0 ? "pair" : "impair");
}
