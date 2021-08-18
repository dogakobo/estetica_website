const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const CitaSchema = new mongoose.Schema({
     cliente: {
          type: String
     },
	fecha: {
          type: String
     },
	servicio: {
          type: String
     },
	estado: {
          type: String
     }
 
});

//exportar schema
module.exports = mongoose.model('Cita', CitaSchema);