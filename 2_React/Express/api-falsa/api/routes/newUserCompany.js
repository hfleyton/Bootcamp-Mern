const express = require('express');
const Empresa = require('../../models/Empresa');
const Usuario = require('../../models/Usuario');
const router = express.Router();

router.get('/company', (req, res) =>{
    const company = new Empresa();
    const user = new Usuario();

    res.json({usuario: user , Compañia : company });
})

module.exports = router;

