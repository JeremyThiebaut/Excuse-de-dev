# Application React - Ma super application

Cette application est une simple application React qui utilise React Router, Axios et Sass.

## Prérequis

Pour exécuter cette application, vous devez avoir Node.js et npm installés sur votre ordinateur.

## Installation

1. Clonez le dépôt Git sur votre ordinateur.
2. Accédez au dossier racine de l'application dans votre terminal.
3. Exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

## Utilisation

1. Dans votre terminal, accédez au dossier racine de l'application.
2. Exécutez la commande suivante pour lancer l'application :

```bash
npm start
```

3. Ouvrez votre navigateur Web et accédez à l'URL suivante :

```bash
http://localhost:3000/
```

## Fonctionnalités

### Page d'accueil

La page d'accueil est la page principale de l'application. Elle affiche un bouton qui, une fois cliqué, génère un message aléatoire. Le message est récupéré à partir d'une API externe.

### Pages d'erreur

L'application dispose d'une page pour les erreurs 404. Cette page affiche un message d'erreur approprié et une image.

### Page perdue

La page perdue est une page personnalisée qui s'affiche lorsqu'un utilisateur accède à une page qui n'existe pas. Elle redirige automatiquement l'utilisateur vers la page d'accueil après cinq secondes.

## Structure du code

Le code de l'application est organisé en plusieurs fichiers :

- **index.js** : le point d'entrée de l'application.
- **components/app/index.js** : le composant racine de l'application.
- **components/button/index.js** : le composant du bouton qui génère des messages aléatoires.
- **components/app/style.scss** : les styles pour le composant racine de l'application.

## Conclusion

C'est tout ! Vous pouvez maintenant utiliser l'application et l'adapter à vos besoins. N'hésitez pas à explorer le code pour voir comment tout fonctionne ensemble.
