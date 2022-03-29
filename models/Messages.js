const { Model, DataTypes } = require("sequelize");
const sequelize = require('../modules/prime')
// const Departments = require('./Departments')


class Messages extends Model { }

Messages.init({

    title: {
        type: DataTypes.STRING, allowNull: false
    },
    content: {
        type: DataTypes.STRING, allowNull: false
    },

    email: {
        type: DataTypes.STRING, allowNull: false,
    }
    

}, {
 
    sequelize,
    modelName: 'messages',
    logging: false,
    timestamps:false,
    underscored: true
})

module.exports = Messages