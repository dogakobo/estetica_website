export class Pedidos{

	constructor(_id=null,  productos=[], domicilio={}, total=0, usuario="", fecha="", hora=""){
		this._id = _id;
		this.productos = productos;
		this.domicilio =  domicilio;
		this.total = total;
		this.usuario = usuario;
		this.fecha = fecha;
		this.hora = hora;
	}
		_id:any;
		productos: any[];
		domicilio: any;
		total: Number;
		usuario: String;
		fecha: String;
		hora:String
}