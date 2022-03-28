
const express = require("express");
const sequelize = require("./modules/prime");
const Departments = require("./models/Departments");
const Messages = require("./models/Messages");
app = express()

app.use(express.static("public"));

const port = process.env.PORT || 8000;

app.use(express.json());


app.get('/', async(req,res)=>{
    const departments = await Departments.findAll()
    res.render('pages/home.ejs', {departments})
    console.log(departments);
})


app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT: ${port}`);
});