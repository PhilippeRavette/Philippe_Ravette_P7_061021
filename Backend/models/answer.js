'use strict';
const User = require('./user');
const Message = require('./message');


const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Answer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, { foreignKey: 'userId' , onDelete: 'CASCADE'});
            // Si on supprime un message, on supprime ses réponses //
            this.belongsTo(models.Message, { foreignKey: 'messageId', onDelete: 'CASCADE' });
        }
    };
    Answer.init({
        userId: DataTypes.INTEGER,
        messageId: DataTypes.INTEGER,
        content: DataTypes.TEXT,
        createdAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Answer',
    });

    return Answer;
};