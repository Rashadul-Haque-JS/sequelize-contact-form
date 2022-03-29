
const Departments = require('../models/Departments')
const Messages = require('../models/Messages')


async function devSetup() {

    await Departments.sync({ force: true })

    await Messages.sync({ force: true })


    console.log('SETUP IS DONE!')

}

devSetup()
