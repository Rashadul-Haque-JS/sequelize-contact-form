
const Departments = require('../models/Departments')
const Messages = require('../models/Messages')


async function devSetup() {

await Departments.sync()
await Messages.sync()
    
console.log('SETUP IS DONE!')

}

devSetup()
 