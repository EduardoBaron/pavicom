const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('pdf-creator-node');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

console.log('error al genraracion pdf');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pdf.html'));
})

app.post('/create-pdf', (req, res) => {
    const {denunciante_nombre,
        denunciante_cc,
        denunciante_edad,
        mail,
        denunciante_fecha_nacimiento,
        denunciante_estado_civil,
        victima,
        denunciante_domicilio,
        denunciante_telefono,
        denunciante_relacion,
        ubicacion_victima,
        relato_hecho,
        victima_nombre,
        victima_mayor,
        victima_edad_aprox,
        victima_fecha_nacimiento,
        victima_domicilio,
        relacion_agresor,
        victima_telefono,
        victima_agresor,
        lugares_victima,
        agresor_nombre,
        agresor_domicilio,
        agresor_relacion,
        agresor_telefono,
        agresor_victima_si,
        lugares_agresor        
        } = req.body;
    const html = fs.readFileSync(path.join(__dirname,  'template.html'), 'utf8');
    console.log(html)
    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
    };
    const document = {
        html: html,
        data: { denunciante_nombre,
            denunciante_cc,
            denunciante_edad,
            mail,
            denunciante_fecha_nacimiento,
            denunciante_estado_civil,
            victima,
            denunciante_domicilio,
            denunciante_telefono,
            denunciante_relacion,
            ubicacion_victima,
            relato_hecho,
            victima_nombre,
            victima_mayor,
            victima_edad_aprox,
            victima_fecha_nacimiento,
            victima_domicilio,
            relacion_agresor,
            victima_telefono,
            victima_agresor,
            lugares_victima,
            agresor_nombre,
            agresor_domicilio,
            agresor_relacion,
            agresor_telefono,
            agresor_victima_si,
            lugares_agresor
             },
        path: path.join(__dirname, 'output.pdf'),
        type: '',
    };

    pdf.create(document, options)
        .then(() => {
            res.sendFile(path.join(__dirname, 'output.pdf'));
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error creating PDF');
        });
});

//app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
//}
//)
