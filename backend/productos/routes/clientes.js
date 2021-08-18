var express = require('express');
var router = express.Router();

//Librerias
const { check, validationResult, Result } = require('express-validator');

//schemas
const mongoose = require('mongoose');
const Cliente = require('../models/Cliente');

//consultar todo
router.get('/', async (req, res) => {
const clientes = await Cliente.find();
res.status(200).send(clientes);
});

//consulta especifica de nombre
router.post('/buscar-cli-nom', async (req, res) =>{
    const clientes = await Cliente.find({nombre: req.body.nombre});
    if(!clientes)
    return res.status(404).send(false);
    
    res.status(200).send(clientes);
});

router.post('/', async (req, res) =>{
    
    const {nombre, apellido, telefono, correo, nomUsuario, domicilio} = req.body;
  
    const newCliente = new Cliente({
        nombre,
        apellido,
        telefono,
        correo,
        nomUsuario,
        domicilio
   });

   await newCliente.save();
   res.status(201).send(newCliente);
});

module.exports = router;
