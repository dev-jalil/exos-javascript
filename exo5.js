///// Object //////

var personne = {
  age: 36,
  last_name: "Ouh",
  first_name: "Tao",
  children: null,
};

// --
console.log("5.1 Afficher l'âge de la personne par la méthode destructuring:");
if (true) points += 10;

// Code
console.log(personne["age"]);

// --
console.log(
  "5.2 Ajouter 2 enfants, Oli 7 ans et Pyz 10 ans  dans l'attribut 'children' de la variable personne:"
);
if (true) points += 10;

// Code
personne.children = [
  { age: "7", last_name: "Ouh", first_name: "Oli" },
  { age: "10", last_name: "Ouh", first_name: "Pyz" },
];
console.log(personne);

// --
console.log(
  "5.3 Afficher le prénom et l'âge des enfants de la variable personne:"
);
if (true) points += 10;

// Exemple
// Ouh a 2 enfants:
// - Oli 7 ans
// - Tao 10 ans

// Code

console.log(`Tao a 2 enfants\n- ${personne.children[0].first_name} ${personne.children[0].age} ans
- ${personne.children[1].first_name} ${personne.children[1].age} ans`);

// --
var personnes = [
  {
    first_name: "Tao",
    age: 13,
    civilite: "Mme",
    books: [{ title: "Title 8" }, { title2: "Title 2" }, { title2: "Title 7" }],
  },
  {
    first_name: "Hyu",
    age: 18,
    civilite: "Mlle",
    books: [],
  },
  {
    first_name: "Uyo",
    age: 32,
    civilite: "M.",
    books: [{ title: "Title 1" }],
  },
  {
    first_name: "Sao",
    age: 28,
    civilite: "Mlle",
    books: [{ title: "Title 9" }, { title2: "Title 6" }],
  },
];

// --
console.log(
  "5.4 Afficher par personne (first_name), la liste des livres (books) qu'elle possède:"
);
if (true) points += 15;

// Exemple :
// Tao, possède les livres suivants:
// - Title 8
// - Title 2
// - Title 7
// Huy, ne possède pas de livre.

// Code
for (let i in personnes) {
  if (personnes[i].books.length == 0) {
    console.log(personnes[i].first_name + ", ne possède pas de livre.");
  } else {
    console.log(personnes[i].first_name + ", possède les livres suivants:");
    for (let j in personnes[i].books) {
      for (let k in personnes[i].books[j])
        console.log(" - " + personnes[i].books[j][k]);
    }
  }
}

// console.log(???)

// --
console.log("5.5 Calculer et afficher la moyenne d'âge du groupe de personne:");
if (true) points += 15;

// Code

let sum = personnes.map((p) => p.age).reduce((a, b) => a + b);
console.log("la moyenne d'age est de", sum / personnes.length, "ans");

// console.log(???)

// -- Utilisation d'un switch/case
console.log(
  "5.6 Affiche Madame si civilite = Mme, Mademoiselle si civilite = Mlle, et Monsieur si civilite = M. :"
);
if (true) points += 15;

// Exemple :
// Madame Tao
// Mademoiselle Hyu
// Monsieur Uyo

for (let p of personnes) {
  switch (p.civilite) {
    case "Mme":
      console.log("Madame", p.first_name);
      break;
    case "Mlle":
      console.log("Mademoiselle", p.first_name);
      break;
    case "M.":
      console.log("Monsieur", p.first_name);
      break;
  }
}

//// Total des points
if (true) console.log("Total des points:" + points + "/200");
