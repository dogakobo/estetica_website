export class Productos {

	constructor(_id="",  codigo="", nombre="", marca="", descripcion="", existencia=0, imagen="", precio=0, visible=false){
		this._id = _id;
		this.nombre = nombre;
		this.marca =  marca;
		this.descripcion = descripcion;
		this.existencia = existencia;
		this.imagen = imagen;
		this.precio = precio;
		this.visible = visible;
	}
		_id:String;
		nombre: String;
		marca: String;
		descripcion: String;
		existencia: Number;
		imagen: String;
		precio: Number;
		visible: Boolean;
}