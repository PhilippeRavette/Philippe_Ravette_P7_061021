// Logique de routing //
const express = require('express'); // Importation du framework Express
const router = express.Router(); // Méthode router() d'express

const messageControl = require('../controllers/message');
const auth = require('../middleware/auth'); // Importation du middleware d'authentification
const admin = require('../middleware/admin'); // Importation du middleware admin pour la suppr des messages
//const multer = require('../middleware/multer-config'); // Importation du middleware multer pour les images


// On rajoute le middleware auth sur les routes qu'on veut protéger //
router.post('/new', auth, messageControl.createMessage);
router.delete('/:id', auth, messageControl.deleteMessage);
router.get('/:id', auth, messageControl.getOneMessage);
router.get('/', auth, admin, messageControl.getAllMessages);

module.exports = router;