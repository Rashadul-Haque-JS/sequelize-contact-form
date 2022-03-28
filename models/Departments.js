const { Model, DataTypes } = require("sequelize");
const sequelize = require('../modules/prime')

class Departments extends Model {};

Departments.init({
    name: {
        type: DataTypes.STRING,
    },

}, {
    sequelize,
    modelName:'departments'
})

module.exports = Departments