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
let xhr = new XMLHttpRequest();
// Configurer la requête
xhr.open('GET', "api", true);

// Définir ce qui se passe lorsque la réponse est reçue
xhr.onload =reqListener;

// Envoyer la requête
xhr.send();

// Gérer les erreurs de réseau
xhr.onerror= ()=>{};
//Configurer la requête


xhr.open('GET', 'https://api.blablagues.net/?rub=blagues', true);

// // Définir ce qui se passe lorsque la réponse est reçue