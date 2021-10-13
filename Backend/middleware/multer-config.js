// Gestion des fichiers entrants dans les requêtes HTTP avec multer //
const multer = require('multer');

//Indique comment nous voulons écrire les types de médias
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif'
};


//Utilisation d'une méthode de multer pour enregistrer les nouvelles images dans le dossier images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },

    filename: (req, file, callback) => {
        //Création d'un nom unique pour la nouvelle image
        const name = file.originalname.split(".").join('_').split(".")[0]; // On élimine les espaces //
        const extension = MIME_TYPES[file.mimetype]; // Création de l'extension diu fichier //
        callback(null, name + Date.now() + "." + extension); // null:pas d'erreur, nom, rajout timestamp, . , extension //
    },
});

module.exports = multer({ storage: storage }).single("image");