const Sequelize = require("sequelize")

const sequelize = new Sequelize("seq-test", "user", "password", {
    dialect: "sqlite",
    host: "./message.sqlite",
});

module.exports = sequelize