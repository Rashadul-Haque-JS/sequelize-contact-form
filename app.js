
const express = require("express");
const sequelize = require("./modules/prime");
const Departments = require("./models/Departments");
const Messages = require("./models/Messages");
app = express()

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use(express.json());

let mgs;


app.get('/', async (req, res) => {
  const departments = await Departments.findAll()
  res.render('pages/home', { departments })

})


app.post("/message", async (req, res) => {
  const { to_department, email, title, content } = req.body;
  mgs = await Messages.create({
    title, content, email, department_id: to_department
  });

  res.redirect("pages/thanks");
});

app.get("/pages/thanks", (req, res) => {
  res.render("pages/thanks", { mgs });
});



app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT: ${port}`);
});