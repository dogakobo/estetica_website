var express = require('express');
var router = express.Router();
const {check, validatorResult} = require('express-validator');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/usuariomodels');
const moment = require ('moment');


router.post('/', [
    check('name').isLength({min:3}),
    check('email').isEmail(),
    check('password').isLength({min:5}),
  ], async (req, res)=>{
    
    // const errores = validatorResult(req);
    // if(!errores.isEmpty()){
    //   return res.status(422).json({errores: errores.array()});
    // }
   valEmail = await User.find({email: req.body.email});

   if(valEmail==""){


    const salt = await bcrypt.genSalt(5);
    const hoyfecha = moment();
    const passCifrado = await bcrypt.hash(req.body.password, salt);
  
      usuario = new User({
        name: req.body.name,
        email: req.body.email,
        password: passCifrado,
        tipo: "cliente",
        fecha: hoyfecha.format('YYYY-MM-DD')
      });

      await usuario.save();

      res.json(usuario);
    }else{
      var error=true;
      res.json(error)
    }
  });



  router.post('/iniciosesion/', [
    check('email').isEmail(),
    check('password').isLength({min:2}),
  ], async (req, res)=>{
  
    // const errores = validatiorResult(req);
    // if(!errores.isEmpty()){
    //     return res.status(422).json({errores: errores.array()});
    // }
   
    usuario = await User.findOne({email: req.body.email});
    if(!usuario){
      return res.status(400).send("Usuario o contraseña incorrectos");
    }
  
    validaPass = await bcrypt.compare(req.body.password, usuario.password);
    if(!validaPass){
      return res.status(400).send("Usuario o contraseña incorrectos");
    }
  
    jwtoken = usuario.generadorjwt();
  
    //res.send("Bienvenido");
    res.json(usuario);
  });
/*

  if(valUsuario==""){
  perfil = new Perfil ({
    Calle: req.body.Calle,
    Numero_int: req.body.Numero_int,
    Numero_ext: req.body.Numero_ext,
    Colonia: req.body.Colonia,
    Estado: req.body.Estado,
    Municipio: req.body.Municipio,
    Codigo_postal: req.body.Codigo_postal
  });

  await perfil.save();

  res.json(perfil);
}else{
  res.json({error: true})
}*/




module.exports = router;
