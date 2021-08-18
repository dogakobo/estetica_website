const Producto = require("./models/producto-schema");
const path = require('path');
const productoControl = {};
const fs = require('fs-extra');
const User = require('./models/usuariomodels');
const moment = require ('moment');
const Cita = require('./models/Cita');
const Pedido = require("./models/pedidos-schema");

productoControl.getProductos = async (req, res) => {
		const productos = await Producto.find()
		res.json(productos);
};

productoControl.getProductosC = async (req, res) => {
		const productos = await Producto.find({visible: {$eq: true}})
		res.json(productos);
};

productoControl.crearProducto = async (req, res) => {
    const producto = new Producto({
				_id: req.body._id,
				nombre: req.body.nombre,
				marca: req.body.marca,
				descripcion: req.body.descripcion,
				existencia: req.body.existencia,
				imagen: req.file.path,
				precio: req.body.precio,
				visible: req.body.visible
			});
    await producto.save();
    res.json({
		"status": "Producto guardado"
	});
};

productoControl.buscarProducto = async (req, res) => {
	const productos = await Producto.find({$or: [{nombre: req.params.busqueda}, {marca: req.params.busqueda}, {descripcion: req.params.busqueda}]});
	res.json(productos);
}

productoControl.getProducto = async (req, res) => {
	console.log(req.params.id);
	const producto = await Producto.findById(req.params);
	res.json(producto);
};

productoControl.editProducto = async (req, res) => {
	
	if(typeof req.body.imagen=='undefined'){
		var img = req.file.path;
	}else{
		var img = req.body.imagen;
	};
	const { id } = req.params;
	const producto = {
		_id: req.body._id,
		nombre: req.body.nombre,
		marca: req.body.marca,
		descripcion: req.body.descripcion,
		existencia: req.body.existencia,
		imagen: img,
		precio: req.body.precio,
		visible: req.body.visible
	};
	await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
	res.json({
		status: "Producto actualizado"
	});
};

productoControl.deleteProducto = async (req, res) => {
	await Producto.findByIdAndRemove(req.params.id);
	res.json({
		status: "Producto eliminado"
	});

};

productoControl.getMarcaProducto = async (req, res)=>{
	const producto = await Producto.find({$and: [{marca: req.params.marca}, {visible: {$eq: true}}]});
	res.json(producto);
};

productoControl.getMaxId = async (req, res) => {
	const maxid = await Producto.find().sort({_id:-1}).limit(1);
	res.json(maxid);
};


productoControl.switchProd = async (req, res) =>{
	const { id } = req.params;
	console.log(req.body.visible);
	if(req.body.visible){
		await Producto.findByIdAndUpdate(id, {$set: {visible:false}});
		res.json({
		status: "Visible cambiado a falso"
	});
	}else{
		await Producto.findByIdAndUpdate(id, {$set: {visible:true}});
		res.json({
		status: "Visible cambiado a verdadero"
	});
	}
};

productoControl.buscarProductos = async (req, res) =>{
	const { busqueda } = req.params;
}

productoControl.dashboard = async (req, res) =>{
	moment.locale('es');
	const hoyfecha = moment();
   var totalusers = await User.countDocuments();
   var nuevos = await User.countDocuments({'fecha': {$eq : hoyfecha.format('YYYY-MM-DD')}});
   var dias = new Array(14);
   var gananciasPedidos = new Array(29);
   var gananciasMes= 0;
   var pedidosMes = 0;
   var cantPedidos = new Array(29);
   var servicios = new Array(2);
   for(var i=0; i<=14; i++){
   	dias[i]=await User.countDocuments({'fecha': {$eq : moment().subtract(14-i, 'days').format('YYYY-MM-DD')}});
   }
   citasHoy = await Cita.countDocuments({fecha:  {$eq: moment().format('YYYY-MM-DD')+"T06:00:00.000Z"}});
   servicios[0] = await Cita.countDocuments({$and: [{fecha:  {$eq: moment().format('YYYY-MM-DD')+"T06:00:00.000Z"}}, {servicio: {$eq:
"Corte de pelo"}}]});
   servicios[1] = await Cita.countDocuments({$and: [{fecha:  {$eq: moment().format('YYYY-MM-DD')+"T06:00:00.000Z"}}, {servicio: {$eq:
"Tinte"}}]});

   for(var i=0; i<=29; i++){
   	cantPedidos[i]=await Pedido.countDocuments({'fecha': {$eq : moment().subtract(29-i, 'days').format('YYYY-MM-DD')}});
   }

   /*var ganancias;
   ganancias=await Pedido.find({'fecha': {$eq : moment().format('YYYY-MM-DD')}});
   	console.log(ganancias[0].productos.length);*/

   for(var i=0; i<=29; i++){
   	var ganancias = new Array(29);
   	ganancias[i]=await Pedido.find({'fecha': {$eq : moment().subtract(29-i, 'days').format('YYYY-MM-DD')}});
   	gananciasPedidos[i] = 0;
   	var total = 0;
   	for(var e=0; e<=ganancias[i].length-1; e++){
   		total =total + ganancias[i][e].total;
   	}
   			gananciasPedidos[i] = total;
   }

   for(var i=0; i<=29; i++){
   	gananciasMes = gananciasMes + gananciasPedidos[i];
   }

   for(var i=0; i<=29; i++){
   	pedidosMes = pedidosMes + cantPedidos[i];
   }

   var dashboard = {
     totalusers: totalusers,
     news: nuevos,
     dias: dias,
     citasHoy: citasHoy,
     servicios: servicios,
     cantPedidos: cantPedidos,
     gananciasPedidos: gananciasPedidos,
     gananciasMes: gananciasMes,
     pedidosMes: pedidosMes

   };
    res.json(dashboard);
}

module.exports = productoControl;