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