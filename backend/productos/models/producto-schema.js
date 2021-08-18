const mongoose = require("mongoose");
const { Schema } = mongoose;


const productoSchema = new Schema({
	_id: { type: Number, required: true, unique: true },
	nombre: { type: String, required: true },
	marca: { type: String, required: true },
	descripcion: { type: String, required: false },
	existencia: { type: Number, required: false },
	imagen: { type: String, required: true },
	precio: { type: Number, required: true },
	visible: { type:Boolean, require: true}
});

module.exports = mongoose.model("Producto", productoSchema); 