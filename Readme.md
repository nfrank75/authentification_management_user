#### Authentification des utilisateurs

Ce projet implémente un système d'authentification d'utilisateurs en utilisant MongoDB, Node.js et Express.js.

# Features
    - Inscription d'utilisateurs (signup)
    - Connexion d'utilisateurs (login)
    - Stockage sécurisé des mots de passe (hachage et salage)
    - Génération et gestion de jetons d'authentification (tokens)
    - Middleware d'authentification pour sécuriser les routes

# Technologies utilisées
    - Node.js : environnement d'exécution JavaScript côté serveur
    - Express.js : framework web pour Node.js
    - MongoDB : base de données NoSQL pour le stockage des utilisateurs
    - Mongoose : ODM (Object Document Mapping) pour interagir avec MongoDB
    - bcrypt : bibliothèque pour le hachage et le salage des mots de passe
    - jsonwebtoken : bibliothèque pour la génération et la vérification de jetons JWT

# Installation et configuration
    1 - Clonez le dépôt du projet : 
        . git clone https://github.com/votre-username/authentication_db.git

    2 - Installez les dépendances
        cd authentication_db
           . npm install

    3 - Configurez les variables d'environnements
        Créez un fichier .env à la racine du projet et ajoutez les variables suivantes :
            . MONGODB_URL : l'URI de connexion à votre base de données MongoDB
            . JWT_SECRET_KEY : une clé secrète pour la génération des jetons JWT
            . PORT : le port pour la connexion, exemple par défaut : 3000

    4 - Lancez le serveur de développement
        Rassurez-vous que vous êtes à la racine 
            . cd authentication_db
            . npm start

# Utilisation

- Le projet fournit les routes suivantes pour l'authentification :

- POST /signup : enregistre un nouvel utilisateur
- POST /login : connecte un utilisateur existant

- Vous pouvez utiliser un outil comme Postman ou Insomnia pour tester ces endpoints.





