# Devoir Bilan Trouve Ton Artisan

Application web développée avec Angular permettant de rechercher un artisan en Auvergne-Rhône-Alpes, de consulter sa fiche et de le contacter via un formulaire.

## Prérequis

Avant d'installer le projet, les éléments suivants doivent être installés :

- Node.js (version 22 ou supérieure)
- npm
- Angular CLI

Installation d'Angular CLI :

```bash
npm install -g @angular/cli
```

## Installation

Cloner le dépôt GitHub :

```bash
git clone <https://github.com/adjolokoueyabana/Devoir-bilan-trouve-ton-artisan.git>
```

Se placer dans le dossier du projet :

```bash
cd Devoir-bilan-trouve-ton-artisan
```

Installer les dépendances :

```bash
npm install
```

## Lancement du projet

Démarrer l'application Angular :

```bash
ng serve -o
```

Puis ouvrir le navigateur à l'adresse :

```text
http://localhost:4200
```

## Lancement du serveur de contact (optionnel)

Pour utiliser le formulaire de contact en local, lancer le serveur Express :

```bash
cd server
npm install
npm start
```

Le serveur est accessible sur :

```text
http://localhost:3000
```

## Messagerie de test (MailDev)

Lancer MailDev :

```bash
maildev
```
MailDev démarre deux services :

1.Interface Web (port 1080)
C'est un site web qui permet de lire les e-mails reçus.

```text 
http://localhost:1080
```

2.Serveur SMTP (port 1025)
C'est lui qui reçoit les e-mails envoyés par le serveur Express/Nodemailer.

```text
localhost:1025
```

## Construction du projet à envoyé chez l'hébergeur

Pour générer la version de production de l'application, exécuter la commande suivante à la racine du projet :

```bash
ng build
```

Une fois la construction terminée, Angular génère les fichiers prêts à être déployés dans le dossier :

```text
dist/Devoir-bilan-trouve-ton-artisan/browser
```

Le contenu du dossier `browser` doit être envoyé chez l'hébergeur.

Les fichiers principaux à transférer sont notamment :

- `index.html`
- les fichiers JavaScript générés
- les fichiers CSS générés
- les fichiers qui sont dans le dossier `public` ou les autres ressources générées

## Technologies utilisées

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Express (Express est un framework pour Node.js qui permet de créer un serveur web et des API)
  Il recevoir la requête envoyée par le formulaire Angular ; traiter les données du formulaire ;
  renvoyer une réponse à Angular.
- Nodemailer (Nodemailer est une bibliothèque spécialisée dans l'envoi d'e-mails.)
  Une fois que Express reçoit la demande, il utilise Nodemailer pour envoyer le message.
  (Nodemailer : Envoie les e-mails à partir du serveur Express.)
- MailDev

## Validation W3C

Les captures d'écran des validations réalisées avec les validateurs HTML et CSS du W3C sont disponibles dans le dossier **Capture** situé à la racine du projet.

## Dépôt GitHub

Le code source du projet est disponible sur le dépôt GitHub suivant :

**<https://github.com/adjolokoueyabana/Devoir-bilan-trouve-ton-artisan.git>**

## Auteur

**Eyabana ADJOLOKOU**
Projet réalisé dans le cadre de ma formation Développeur Web et Web Mobile.