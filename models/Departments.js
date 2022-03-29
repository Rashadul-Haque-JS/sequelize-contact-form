const { Model, DataTypes } = require("sequelize");
const sequelize = require('../modules/prime')

class Departments extends Model {};

Departments.init({
    name: {
        type: DataTypes.STRING,unique:true
    },

}, {

    sequelize,
    modelName:'departments',
    logging :false,
    timestamps:false,
    underscored: true
})

module.exports = Departments