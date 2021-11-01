'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //Si on supprime un user, on supprime ses messages 
            this.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
            this.hasMany(models.Answer);
        }
    };
    Message.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        userId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Message',
    });
    return Message;
};