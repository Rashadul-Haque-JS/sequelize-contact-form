const express = require("express");
const sequelize = require("./modules/prime");
const Departments = require("./models/Departments");
const Messages = require("./models/Messages");

const port = process.env.PORT || 8000;

sequelize.sync({force: true}).then(() => {
  console.log("db is ready!");
});

const app = express();

app.use(express.json());



app.post("/departments", async (req, res) => {
  const {name}= await Departments.create(req.body);
  res.send(name);
  console.log(name);
});

// app.get('/departments', async(req,res)=>{
//     const allUser = await User.findAll()
//     res.send(allUser)
//     console.log(allUser);
// })

app.post('/messages', async (req, res) => {
    const {title} = await Messages.create(req.body)
    res.send(title)

    console.log(title)
    // res.redirect('pages/home')

  })



app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT: ${port}`);
});