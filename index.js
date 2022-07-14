const express = require('express')
const app = express()
const path = require("path");
const sys = require('sys')
const exec = require('child_process').exec 
const port = 3000

const ping = async (host) => {
   const {stdout, stderr} = await exec(`ping -c 5 ${host}`);
   return stdout, stderr
}

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

app.post('/api/online', (req, res) => {
   var { stdout, stderr } = ping('pc.olliwes.me');
   if (stderr) {
      return res.send("OFF")
   } else {
      return res.send("ALIVE")
   }
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
