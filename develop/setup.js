
const { Departments, Messages } = require('../models/index')



async function devSetup() {

    await Departments.sync({ force: true });
    await Messages.sync({ force: true });

    console.log('SETUP IS DONE!')

}

devSetup()
