const express = require('express'); // On a besoin d'express pour créer le routeur //
const router = express.Router(); // Création routeur avec la méthode router() d'express
const rateLimit = require("express-rate-limit"); // Contre les attaques de force brute

// Importation de la logique métier des controllers //
const userControl = require('../controllers/user');

const auth = require('../middleware/auth'); // Importation du middleware multer pour l'authenfication
const admin = require('../middleware/admin') // Importation du middleware multer pour l'authenfication admin
    //const multer = require('../middleware/multer-config'); // Importation du middleware multer pour les images

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes de test
    max: 5 // 5 essais maximum par adresse IP
});


// Définition des routes authentification //

// Route POST pour l'inscription d'un utilisateur
router.post('/signup', verifyPassword, userControl.signup);

// Route POST pour la connexion d'un utilisateur
router.post('/login', limiter, userControl.login);

// Route DELETE pour supprimer un user
router.delete('/:id', auth, admin, userControl.deleteAccount);

// Route GET pour afficher un user
router.get('/:id', auth, userControl.getOneAccount);

// Route PUT pour modifier un user
router.put('/:id', auth, userControl.modifyAccount);

// Route GET pour afficher tous les utilisateurs
router.get('/accounts', userControl.getAllAccounts);

module.exports = router;