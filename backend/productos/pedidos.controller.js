const Pedido = require("./models/pedidos-schema");
const path = require('path');
const pedidosCtrl = {};
const fs = require('fs-extra');
const User = require('./models/usuariomodels');
const moment = require ('moment');

pedidosCtrl.crearPedido = async (req, res) => {
    const pedido = new Pedido({
				_id:req.body._id,
				productos: req.body.productos,
				domicilio: req.body.domicilio,
				total: req.body.total,
				usuario: req.body.usuario,
				fecha: moment().format('YYYY-MM-DD'),
				hora: moment().format('hh:mm A')
			});
    await pedido.save();
    res.json({
		"status": "Pedido exitoso"
	});
};

pedidosCtrl.getPedidos = async (req,res)=>{
	const pedidos = await Pedido.find({}, (err,docs) => {
    
    }).sort({fecha:-1});
	res.json(pedidos)
}

pedidosCtrl.getPedidosHoy  = async (req,res)=>{
	const pedidos = await Pedido.find({'fecha': {$eq : moment().format('YYYY-MM-DD')}});
	res.json(pedidos)
}

module.exports = pedidosCtrl;