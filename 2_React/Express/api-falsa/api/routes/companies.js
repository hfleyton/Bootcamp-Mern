const express = require('express');
const Empresa = require('../../models/Empresa');
const router = express.Router();

router.get('/new', (req, res) =>{
    const company = new Empresa();

    res.json(company);
})

module.exports = router;