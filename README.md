Vue.js Authentification
Ce projet est une application Vue.js avec un système d'authentification. Il utilise Vue 3, Vue Router pour la navigation, Vuex pour la gestion d'état, et TypeScript pour une meilleure sécurité et maintenabilité du code.

Fonctionnalités
Authentification utilisateur : Connexion et déconnexion.

Protection des routes : Les routes protégées ne sont accessibles qu'aux utilisateurs authentifiés.

Gestion d'état : Utilisation de Vuex pour gérer l'état de l'application (utilisateur connecté, token, etc.).

TypeScript : Codebase typé pour une meilleure détection des erreurs et une maintenance simplifiée.

Technologies utilisées
Vue.js 3 : Framework JavaScript pour construire l'interface utilisateur.

Vue Router : Gestion des routes et de la navigation.

Vuex : Gestion centralisée de l'état de l'application.

TypeScript : Langage de programmation typé pour JavaScript.

ESLint : Outil de linting pour maintenir un code propre et conforme aux bonnes pratiques.

Jest : Framework de tests unitaires.

Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 14.x ou supérieure)

npm (gestionnaire de paquets Node.js) ou yarn

Vue CLI (optionnel, mais recommandé)

Installation
Cloner le dépôt :

bash
Copy
git clone https://github.com/votre-utilisateur/vue.js-authentification.git
cd vue.js-authentification
Installer les dépendances :

bash
Copy
npm install
ou si vous utilisez Yarn :

bash
Copy
yarn install
Configurer l'environnement :
Créez un fichier .env à la racine du projet et ajoutez les variables d'environnement nécessaires (par exemple, l'URL de l'API d'authentification) :

Copy
VUE_APP_API_URL=https://votre-api.com
Utilisation
Développement
Pour lancer le serveur de développement :

bash
Copy
npm run dev
Le projet sera accessible à l'adresse : http://localhost:8080.

Production
Pour compiler le projet pour la production :

bash
Copy
npm run build
Les fichiers compilés seront disponibles dans le dossier dist/.

Tests
Pour exécuter les tests unitaires :

bash
Copy
npm run test:unit
Linting
Pour vérifier et corriger les erreurs de style de code :

bash
Copy
npm run lint
