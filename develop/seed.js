
const Departments = require("../models/Departments");

async function depNames() {
    const names = await Departments.create(['IT',    
    'Finance',    
    'Human Resources',    
    'Markting',    
    'Production',    
    'Research'])
    
    console.log(names)
    return names
}

depNames()

