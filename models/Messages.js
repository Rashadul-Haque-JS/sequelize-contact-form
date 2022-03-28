const { Model, DataTypes } = require("sequelize");
const sequelize = require('../modules/prime')


class Messages extends Model{}

Messages.init({
   
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
    },


}, {
    sequelize,
    modelName:'messages'
})

module.exports = Messages