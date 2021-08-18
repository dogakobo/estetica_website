var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Cita = require('../models/Cita');


router.get('/', async (req, res) => {
     const citas = await Cita.find();
     res.status(200).send(citas);
});

router.post('/', async (req, res) => {
     const {cliente, fecha, servicio, estado} = req.body;

     const newCita = new Cita({
          cliente,
          fecha,
          servicio,
          estado
     });

     await newCita.save();

     res.status(200).send(newCita);


})


module.exports = router;