const express = require('express')
const app = express()
const path = require("path");
const port = 3000

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/projects", (req, res) => {
    res.render("projects", { title: "Projects" })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' })
})

app.use((req, res, next) => {
    res.status(404).send("<h1>404, page not found !</h1>");
});

app.use((req, res, next) => {
    res.status(500).send("<h1>500, A server error occured !</h1>");
});

app.listen(port, () => {
    console.log(`Server starting | express`);
});