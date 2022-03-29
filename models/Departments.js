const { Model, DataTypes } = require("sequelize");
const sequelize = require('../modules/prime')

class Departments extends Model {};

Departments.init({
    name: {
        type: DataTypes.STRING,unique:true
    },

}, {

    sequelize,
    modelName:'departments'
})

module.exports = Departments