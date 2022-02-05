const express = require('express')
const app = express()
const path = require("path");
const port = 3000

app.use(express.static(__dirname + '/public'))

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
    res.status(404).render('errors/404', { title: 'Error' });
});

app.use((req, res, next) => {
    res.status(500).render("errors/500", { title: 'Error' });
});

app.listen(port, () => {
    console.log(`Server starting | express`);
});