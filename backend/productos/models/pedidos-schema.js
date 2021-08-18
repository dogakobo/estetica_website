const mongoose = require("mongoose");
const { Schema } = mongoose;


const pedidoSchema = new Schema({
	_id: { type: Number, required: true, unique: true },
	productos: [{ 
		_id: Number,
		nombre: { type: String},
		marca: { type: String},
		descrpcion: { type: String},
		existencia: { type: String},
		imagen: { type: String},
		precio: {type: Number},
		visible: {type: Boolean},
		__V: {type: Number},
		cantidad: {type: Number}
	}],
	domicilio: { type: Object, required: true },
	total: { type: Number, required: true },
	usuario: { type: String, required: true },
	fecha: { type: String, required: true },
	hora: { type: String, required: true },

});

module.exports = mongoose.model("Pedido", pedidoSchema); 