# Devoir Bilan - Trouve ton artisan

Application web développée dans le cadre de la formation Développeur Web et Web Mobile.

Le projet « Trouve ton artisan » est une plateforme destinée à la Région Auvergne-Rhône-Alpes. Elle permet aux utilisateurs de rechercher des artisans de la région, de consulter leurs informations et de les contacter à l'aide d'un formulaire.

## Fonctionnalités principales

- Recherche d'un artisan par nom, spécialité ou ville.
- Consultation des artisans par catégorie.
- Affichage des artisans du mois.
- Consultation de la fiche détaillée d'un artisan.
- Affichage de la note de l'artisan sous forme d'étoiles.
- Formulaire permettant de contacter un artisan.
- Navigation avec Angular Router.
- Page 404 pour les routes inexistantes.
- Interface responsive adaptée aux différents formats d'écran.
- Utilisation de Bootstrap et Sass pour la mise en forme.

## Prérequis

Avant d'installer le projet, les éléments suivants doivent être disponibles sur la machine :

- Node.js version 22 ou supérieure
- npm
- Angular CLI
- Git

Installation d'Angular CLI :

```bash
npm install -g @angular/cli
```

Pour tester l'envoi des e-mails en local, MailDev doit également être installé :

```bash
npm install -g maildev
```

## Installation

Cloner le dépôt GitHub :

```bash
git clone https://github.com/adjolokoueyabana/Devoir-bilan-trouve-ton-artisan.git
```

Se placer dans le dossier du projet :

```bash
cd Devoir-bilan-trouve-ton-artisan
```

Installer les dépendances :

```bash
npm install
```

## Lancement de l'application Angular

À la racine du projet, exécuter :

```bash
ng serve
```

L'application est ensuite accessible à l'adresse :

```text
http://localhost:4200
```

## Lancement du serveur de contact

Pour utiliser le formulaire de contact en environnement local, ouvrir un nouveau terminal puis se placer dans le dossier du serveur :

```bash
cd server
```

Installer les dépendances du serveur si nécessaire :

```bash
npm install
```

Puis démarrer le serveur Express :

```bash
npm start
```

Le serveur est accessible à l'adresse :

```text
http://localhost:3000
```

Une route de contrôle permet également de vérifier son fonctionnement :

```text
http://localhost:3000/api/health
```

## Messagerie de test avec MailDev

Pendant le développement, les e-mails sont interceptés localement avec MailDev afin de ne pas envoyer de messages réels aux artisans.

Dans un nouveau terminal, exécuter :

```bash
maildev
```

MailDev utilise :

- une interface Web sur le port `1080` ;
- un serveur SMTP local sur le port `1025`.

L'interface permettant de consulter les e-mails de test est accessible à l'adresse :

```text
http://localhost:1080
```

Configuration SMTP locale :

```text
localhost:1025
```

Le fonctionnement du formulaire de contact est le suivant :

```text
Application Angular
        ↓
API Express
        ↓
Nodemailer
        ↓
MailDev
```

## Construction du projet

Pour générer la version de production de l'application, exécuter à la racine du projet :

```bash
ng build
```

Angular génère alors les fichiers nécessaires au déploiement dans le dossier `dist` du projet.

Pour la configuration actuelle du projet, le résultat de la construction est disponible dans :

```text
dist/Devoir-trouve-ton-artisan/browser
```

Le contenu du dossier `browser` constitue la version statique destinée à être envoyée chez l'hébergeur.

Les fichiers `.scss` du projet sont automatiquement compilés en fichiers CSS lors de cette construction afin de pouvoir être interprétés par les navigateurs.

## Technologies utilisées

### Front-end

- Angular
- TypeScript
- HTML5
- Bootstrap
- Sass / SCSS

### Back-end de développement

- Node.js
- Express
- Nodemailer

### Outils

- Figma
- Git
- GitHub
- Visual Studio Code
- MailDev

## Utilisation de Sass / SCSS

Les feuilles de style de l'application utilisent Sass avec la syntaxe SCSS.

La configuration Angular utilise des fichiers `.scss` pour les styles globaux et les styles des composants.

Sass est notamment utilisé pour :

- définir les couleurs de la charte graphique avec des variables Sass ;
- centraliser les valeurs de couleurs utilisées par l'application ;
- utiliser l'imbrication des sélecteurs ;
- organiser plus clairement les styles des composants.

Exemple de variable Sass utilisée dans le projet :

```scss
$color-primary: #0074c7;
$color-primary-dark: #00497c;
```

Exemple d'imbrication Sass :

```scss
.nav-link {
  &:hover,
  &:focus-visible {
    color: var(--color-primary);
  }
}
```

Lors de la commande `ng build`, Angular compile automatiquement le SCSS en CSS pour la version destinée au navigateur.

## Charte graphique

L'application respecte la charte graphique fournie dans le sujet du projet.

La police Graphik est utilisée ainsi que la palette de couleurs suivante :

```text
#f1f8fc
#0074c7
#00497c
#384050
#cd2c2e
#82b864
```

## Responsive design et accessibilité

L'interface a été conçue pour s'adapter aux différentes tailles d'écran, notamment mobile, tablette et ordinateur.

Bootstrap est utilisé pour faciliter la création d'une interface responsive.

Une attention particulière est également portée à la structure HTML, à la navigation et à l'accessibilité conformément aux objectifs WCAG 2.1 demandés dans le sujet.

## Validation W3C

Les contrôles HTML et CSS ont été réalisés à l'aide des outils de validation du W3C.

Les captures d'écran des validations sont disponibles dans le dossier :

```text
Capture
```

situé à la racine du projet.

## Déploiement

Le front-end de l'application est accessible en ligne à l'adresse suivante :

https://gaelsuperman.alwaysdata.net/

Le serveur Express et le système d'envoi d'e-mails avec MailDev sont utilisés dans l'environnement de développement local et ne sont pas déployés avec le front-end statique.

## Dépôt GitHub

Le code source du projet est disponible sur GitHub :

https://github.com/adjolokoueyabana/Devoir-bilan-trouve-ton-artisan

Le projet est versionné avec Git.

## Auteur

**Eyabana ADJOLOKOU**

Projet réalisé dans le cadre de la formation **Développeur Web et Web Mobile**.