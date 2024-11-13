const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const Registro = require('../models/registro');
const Denunciar = require('../models/denunciar');


router.post('/registrar', async (req, res) => {
    const { id_user, username, email, telefono } = req.body;

    try {
        // Verificar si el email ya está registrado
        let registro = await Registro.findOne({ where: { email } });
        if (registro) {
            return res.status(400).json({ message: 'Email registrado con anterioridad' });
        }

        // Crear nuevo registro
        registro = await Registro.create({
            id_user,username,email,telefono});

        // Generar payload y token
        const payload = {
            registro: {
                id: registro.id
            }
        };

        jwt.sign(payload, 'secret', { expiresIn: 3000 }, (erro, token) => {
            if (erro) return res.status(400).json({ message: erro });
            return res.json({ token });
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

/* denunciar */
router.post('/denunciar', async (req, res) => {
    const { denunciante_nombre, denunciante_cc,denunciante_edad,mail,denunciante_fecha_nacimiento,
        denunciante_estado_civil,victima,denunciante_domicilio,denunciante_telefono,
        denunciante_relacion,ubicacion_victima,relato_hecho,victima_nombre,victima_mayor,
        victima_edad_aprox,victima_fecha_nacimiento,victima_domicilio,relacion_agresor, 
        victima_telefono,victima_agresor,lugares_victima,agresor_nombre,agresor_domicilio,
        agresor_relacion, agresor_telefono,agresor_victima_si,lugares_agresor } = req.body;

    try {
        // Verificar si el email ya está registrado
        let denunciar = await Denunciar.findOne({ where: { mail } });
        if (denunciar) {
            return res.status(400).json({ message: 'Email registrado con anterioridad' });
        }

        // Crear nuevo registro
        denunciar = await Denunciar.create({
        denunciante_nombre,denunciante_cc,denunciante_edad,mail,denunciante_fecha_nacimiento,
        denunciante_estado_civil,victima, denunciante_domicilio,denunciante_telefono,
        denunciante_relacion, ubicacion_victima, relato_hecho,victima_nombre,victima_mayor,
        victima_edad_aprox,victima_fecha_nacimiento,victima_domicilio, relacion_agresor, 
        victima_telefono,victima_agresor,lugares_victima,agresor_nombre,agresor_domicilio,
        agresor_relacion, agresor_telefono,agresor_victima_si,lugares_agresor});

        // Generar payload y token
        const payload = {
            denunciar: {
                id: denunciar.id
            }
        };

        jwt.sign(payload, 'secret', { expiresIn: 3000 }, (erro, token) => {
            if (erro) return res.status(400).json({ message: erro });
            return res.json({ token });
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = router;
