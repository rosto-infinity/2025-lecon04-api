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

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.blablagues.net/?rub=blagues', true);

// xhr.onload = function () {

//   if (xhr.status >= 200 && xhr.status < 300) {
//     // console.log(xhr.responseText);
//   } else {
//     // console.error("Error", responseText);
//   }
// }
// xhr.onerror = () => {
//   // console.log('Erreur de réseau'); 
// }
// xhr.send()


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

// fetch("https://api.blablagues.net/?rub=blagues")
  // .then((resp) => {
    // console.log(resp);
  // })
  // .catch((error) => {
    // console.log(error);
  // })
// console.log('CC-DA-samedi');

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
  // console.log("Bonjour");
}
bigUp()

let a = "bonjour"
// console.log(typeof (a));

let b = 15
function add() {
  // console.log(a + b);
}
add()


// let som= add(2, 89) 
// console.log(som);


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

const nombres = [1, 3, 5, 7, 9];
const double = nombres.map((nombres) => nombres * 2);

// console.log(double);

const utilisateur = [
  { prenom: "maiva", age: 16 },
  { prenom: "ange", age: 17 },
  { prenom: "merveille", age: 18 },
];

const description = utilisateur.map(
  user => `${user.prenom} a ${user.age}ans`);
// console.log(description);

const descriptString = description.join('\n')
// console.log(descriptString);

const produits = [
  {
  nom: "smartphone",
  marque: "samsung",
  model: "s25 ultra"
},
{
  nom: "ordinateures",
  marque: "mackbook",
  model: "pro"
}
];

const nproduits = produits.map(produits =>
`  ${produits.nom }
  ${ produits.marque}
  ${produits.model}
  `
).join('\n');

// console.log(nproduits);

//############""""""""""""""""""""""""""""""""""

// CRUD => Create (POST), read (GET), Update (PUT), Delete (DELETE)
// instalation de nodeJs
//** npm -v
// **cd cours
// **npm init -y


//******npm install -g json-server***********

// L'expression npm i -g json-server est une commande qui s'exécute via le terminal/commande prompt/gitbash.
// Elle utilise le gestionnaire de paquets (NPM) de Node.js pour installer globalement (-g) le module jsonserver qui permet de créer rapidement un serveur HTTP RESTful pour des opérations CRUD sur un fichier
// JSON local.


// creer un fichier db.json
//**** */ json-server --w db.json
//**** */npx json-server --w db.json



const init2 = {
  // method: "POST",
  method: "DELETE",
  headers: {
  "Content-Type": "application/json"
  },
  body: JSON.stringify({
  pseudo: "rostodev",
  message: "Hello world!",
  }),
  mode: "cors",
  credentials: "same-origin",
  };

document.querySelector('form').addEventListener('submit',
    () =>{
    fetch("http://localhost:3000/posts/8eff", init2)
    .then(() => console.log("data envoyée"));
      })

 // Asynchrone
    //-----------------

    // **1
    setInterval(() => {
      // console.log("text");
  }, 1000);

   //**2
// Promise

// fetch("mon lien").then((res)=> res)

// fetch("mon lien").then((res)=> res)
// async/await
async function fecthData() {
await fectch('monlien')
// attend que le await soit exécuté avant de faire la suite
executeFonction();
}

const fecthData2 = async ()=>{
  await fetch("mon lien");
executeFonction();
}

const a0 = { username: 'Myra' };
const b0 = { username: 'Myra' };
if (a0.username === b0.username) {
  console.log('TRUE--------');
} else {
  console.log('FALSE----------');
}

const a11 = { username: 'Myra' };
const b11 = { username: 'Myra' };
if (a11 === b11) {
  console.log('TRUE111111111111');
} else {
  console.log('FALSE1111111111111111');
}


const demo = (v) => {
  if (v > 4) {
    return "Hello";
    if (v > 5){
      return "World";
    }
  }
}
console.log(demo(10));





