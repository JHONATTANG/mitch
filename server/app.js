const express = require('express');
const path = require('path');

const app = express();

const puerto = 3050;

// archivos estaticos desde public
app.use(express.static(path.join(__dirname, 'public')));

// ruta principal
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
})

// ruta para cambiar contenido SECTION
app.get('/section/:name', (req,res) => {
    const sectionName = req.params.name;
    const filePath = path.join(__dirname,'public', 'sections',`${sectionName}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('<p>Sección no encontrada.</p>');
        }
    });
})

// puerto
app.listen(puerto,()=>{
    console.log("App listen port "+puerto);
})


//original
/*
app.use('/', express.static(path.join(__dirname, '/public')));






app.use((req,res) => {
    res.status(404);
    res.send(`<h1>ERROR 404: Page not found</h1><p>Go to the page <a href="https://mitchdigital.online/">MitchDigital</a></p>`)
})





app.listen(puerto,()=>{
    console.log("App listen port "+puerto);
})
*/