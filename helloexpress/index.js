const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!!!!!!!!!");
})

app.get("/home", (req, res) => {
  res.send("Welcome to our homepage");
})

app.get("/home/user", (req, res) => {
  res.send("Welcome to our page user!");
})

app.get("/home/user/:name", (req, res) => {
  res.send("Welcome " + req.params.name);
})

app.get("/home/user/:name/:age", (req, res) => {
const age = req.params.age;
if (age < 18) {
  res.send(`Welcome ${req.params.name}, you're too young`);
}
else {
  res.send(`Welcome ${req.params.name}, you're ${age} years old`);
}
})

app.get("/about", (req, res) => {
  res.send("About us...");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
