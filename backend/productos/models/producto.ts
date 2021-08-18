export class Productos {

	constructor(_id=null,  codigo="", nombre="", marca="", descripcion="", existencia=null, imagen=File, precio=null, visible=false){
		this._id = _id;
		this.nombre = nombre;
		this.marca =  marca;
		this.descripcion = descripcion;
		this.existencia = existencia;
		this.imagen = imagen;
		this.precio = precio;
		this.visible = visible;
	}
		_id:any;
		nombre: String;
		marca: String;
		descripcion: String;
		existencia: any;
		imagen: any;
		precio: any;
		visible: Boolean;
}

