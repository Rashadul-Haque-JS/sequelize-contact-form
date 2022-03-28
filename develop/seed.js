
const Departments = require("../models/Departments");

const values = ['IT', 'Finance', 'Human', 'Marketing', 'Production', 'Research']


values.forEach(async (value) => {
    await Departments.destroy({
        where: {
            name: value,
          
        }
    }
    )
    await Departments.create({
        name: value
    }
    )
})







