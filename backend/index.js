'use strict'
const express = require('express');
const morgan = require ("morgan"); 
const cors = require("cors");
const app = express();
const path = require('path');
const { mongoose } = require ("./database");
const prperties = require('./config/prperties');
const DB = require('./config/db');


DB();

const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


app.use(cors());
app.use(router);
//Settings
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname + '/../dist/ProyectoEstetica')));

app.get('/Inicio', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});
app.get('/Catalogo', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

app.get('/Nosotros', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

app.get('/Carrito', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

app.get('/Clientes', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

app.get('/InicioPanel', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

app.get('/Citas', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

app.get('/Pedidos', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

app.get('/Productos', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../dist/ProyectoEstetica/index.html'));
});

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}));
app.use('/uploads', express.static(path.resolve('uploads')));
//Routes
app.use('/api/pedidos/',require('./productos/routes/pedidos.routes.js'));
app.use('/api/producto/',require('./productos/routes/producto.routes.js'));
app.use('/api/iniciosesion/', require('./productos/routes/usuario.js'));
app.use('/api/cliente/', require('./productos/routes/clientes.js'));
app.use('/api/cita/', require('./productos/routes/citas'));


//Start server
app.listen(app.get("port"), ()=> {
	console.log("Server on port ", app.get("port"));
});