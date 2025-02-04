// XMLHttpRequest
// XMLHttpRequest est un objet JavaScript qui permet de faire des requêtes HTTP (ou HTTPS) vers un serveur web. Il est principalement utilisé pour récupérer des données de manière asynchrone sans avoir à recharger la page. Voici un aperçu de ses caractéristiques et de son utilisation :
// Caractéristiques
// 1.	Asynchrone :
// •	XMLHttpRequest permet d'envoyer des requêtes sans bloquer l'interface utilisateur. Cela signifie que l'utilisateur peut continuer à interagir avec la page pendant que la requête est en cours.
// 2.	Support des différents types de données :
// •	Il peut gérer différents types de données, comme JSON, XML, HTML, texte brut, etc.
// 3.	Compatibilité :
// •	Bien que XMLHttpRequest soit largement supporté dans tous les navigateurs modernes, il a été partiellement remplacé par l'API Fetch, qui offre une syntaxe plus simple et des fonctionnalités améliorées.
// Utilisation de base
// Voici un exemple simple d'utilisation de XMLHttpRequest :

// Créer une nouvelle instance de XMLHttpRequest
// let xhr = new XMLHttpRequest();
// // Configurer la requête
// xhr.open('GET', "api", true);

// // Définir ce qui se passe lorsque la réponse est reçue
// xhr.onload =reqListener;

// // Envoyer la requête
// xhr.send();

// // Gérer les erreurs de réseau
// xhr.onerror= ()=>{};
// //Configurer la requête

//Pratique

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.blablagues.net/?rub=blagues', true);

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    // console.log(xhr.responseText);
  } else {
    // console.error("Error", responseText);
  }
}
xhr.onerror = () => {
  // console.log('Erreur de réseau'); 
}
xhr.send()


//----------------
// FECTH
//----------------

// fetch("mon lien api", "objet d'options")
// .then((response) =>{
//Instructions ...
// })
// .catch((error)=>{
//Instructions ...
// })

fetch("https://api.blablagues.net/?rub=blagues")
  .then((resp) => {
    // console.log(resp);
  })
  .catch((error) => {
    console.log(error);
  })

const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "no-cors",
  cache: "default",
}


// fetch("http://facebook.com", init)
// .then((res) => console.log(res));

function bigUp() {
  console.log("Bonjour");
}
bigUp()

let a = "bonjour"
console.log(typeof (a));

let b = 15
function add() {
  console.log(a + b);
}
add()


// let som= add(2, 89) 
// console.log(som);


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

const nombres = [1, 3, 5, 7, 9];
const double = nombres.map((nombres) => nombres * 2);

console.log(double);

const utilisateur = [
  { prenom: "maiva", age: 16 },
  { prenom: "ange", age: 17 },
  { prenom: "merveille", age: 18 },
];

const description = utilisateur.map(
  user => `${user.prenom} a ${user.age}ans`);
  console.log(description);

  const descriptString =description.join('\n')
  console.log(descriptString);
















