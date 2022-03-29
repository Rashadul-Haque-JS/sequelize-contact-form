const Sequelize = require("sequelize")

const sequelize = new Sequelize( {
    dialect: "sqlite",
    storage: "./message.sqlite",
});

module.exports = sequelize