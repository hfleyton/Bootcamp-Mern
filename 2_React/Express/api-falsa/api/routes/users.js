const express = require('express');
const Usuario = require('../../models/Usuario');
const router = express.Router();

router.get('/new', (req, res) =>{
    const user = new Usuario();

    res.json(user);
})

module.exports = router;