const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const ClienteSchema = new mongoose.Schema({
    nombre: {
    type: String,
    required: true
    },
    apellido:{
    type: String,
    required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correo: {
    type: String,
    required: true,
    unique : true
    },
    nomUsuario: {
    type: String,
    required: true
    },
    domicilio: {
    type: String,
    required: true
    }

});

//exportar schema
module.exports = mongoose.model('Clientes', ClienteSchema);