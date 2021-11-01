const { Message } = require('../models/index');

// Création d'un message //
exports.createMessage = (req, res, next) => {
    const message = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    };
    Message.create(message)
        .then(() => res.status(201).json({ message: "Message envoyé!" }))
        .catch(error => res.status(400).json({ error }));
};

// Suppression d'un message //
exports.deleteMessage = (req, res, next) => {
    Message.findOne({ where: { id: req.params.id } }) // On trouve l'objet dans la base de données //
        .then((Message) => {
            Message.destroy({ where: { id: req.params.id } }) // Méthode //
                .then(() => res.status(200).json({ message: 'Message supprimé' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// Obtention d'un message //
exports.getOneMessage = (req, res, next) => {
    Message.findByPk(req.params.id, {
            include: ['User', 'Answers']
        })
        .then(message => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
};

// Obtention des messages //
exports.getAllMessages = (req, res, next) => {
    Message.findAll({
            include: ['User'],
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['createdAt', 'DESC']
            ],

        })
        .then((messages) => res.status(200).json(messages))
        .catch((error) => res.status(400).json({ error }));
};