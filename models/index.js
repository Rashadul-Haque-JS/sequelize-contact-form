
const Departments = require('./Departments')
const Messages = require('./Messages')

Departments.hasMany(Messages);
Messages.belongsTo(Departments)

module.exports = {Departments, Messages}