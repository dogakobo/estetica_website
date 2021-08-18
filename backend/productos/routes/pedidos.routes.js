const express = require("express");
const router = express.Router();

const pedidosCtrl = require("../pedidos.controller");

router.get("/", pedidosCtrl.getPedidos);
router.get("/hoy/", pedidosCtrl.getPedidosHoy);
router.post("/crear/", pedidosCtrl.crearPedido);
module.exports = router;