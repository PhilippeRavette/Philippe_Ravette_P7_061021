// Logique de routing //
const express = require('express'); // Importation du framework Express
const router = express.Router(); // Méthode router() d'express

const answerControl = require('../controllers/answer'); // Importation du controlleur answer
const auth = require('../middleware/auth'); // Importation du middleware d'authentification
const admin = require('../middleware/admincontrol'); // Importation du middleware admin pour la suppr des messages

// On rajoute le middleware auth sur les routes qu'on veut protéger //
router.post('/new', auth, answerControl.createAnswer);
router.get('/:id/display', auth, answerControl.getAllAnswers);
router.get('/:id', auth, answerControl.getOneAnswer);
router.delete('/:id', auth, admin, answerControl.deleteAnswer);


module.exports = router;