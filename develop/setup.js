const { Model, DataTypes } = require("sequelize");
const sequelize = require('../modules/prime')

class Departments extends Model { };
class Messages extends Model { }




sequelize.sync({force: true}).then(() => {
   
    Departments.init({
        name: {
            type: DataTypes.STRING,
        },

    }, {
        sequelize,
        modelName: 'departments'
    })

    

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
        modelName: 'messages'
    })



     
     console.log('SETUP DONE')
  });

 