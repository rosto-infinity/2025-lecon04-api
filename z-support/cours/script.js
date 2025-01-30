// XMLHttpRequest
// Créer une nouvelle instance de XMLHttpRequest
let xhr = new XMLHttpRequest();

//#############-------------------
// // Configurer la requête
// xhr.open('GET', "api", true);

// // Définir ce qui se passe lorsque la réponse est reçue
// xhr.onload =reqListener;

// // Envoyer la requête
// xhr.send();

// // Gérer les erreurs de réseau
// xhr.onerror= ()=>{};

//#############-------------------





// Configurer la requête
// xhr.open('GET', 'https://api.blablagues.net/?rub=blagues', true);

// // Définir ce qui se passe lorsque la réponse est reçue
// xhr.onload = function() {
//   if (xhr.status >= 200 && xhr.status < 300) {
//       // La requête a réussi, traiter la réponse
//       // console.log(xhr.responseText);
//   } else {
//       // Gérer les erreurs
//       // console.error('Erreur:', xhr.statusText);
//   }
// };

// // Gérer les erreurs de réseau
// xhr.onerror = function() {
//   // console.error('Erreur de réseau');
// };

// // Envoyer la requête
// xhr.send();


//----------------
// FECTH
//----------------
// fetch("mon lien", "objet d'options")
// .then((response) => {
// //console.log(response)
// })
// .catch((error)=>console.log(error));


fetch("https://api.blablagues.net/?rub=blagues")
.then((response) => {
console.log(response)
})
// .catch((error)=>console.log(error));
