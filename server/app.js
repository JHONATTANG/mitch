const express = require('express');
const path = require('path');

const app = express();

const puerto = 3050;

app.use('/home', express.static(path.join(__dirname, '/public')));

app.use((req,res) => {
    res.status(404);
    res.send(`<h1>ERROR 404: Page not found</h1>`)
})


app.listen(puerto,()=>{
    console.log("App listen port "+puerto);
})