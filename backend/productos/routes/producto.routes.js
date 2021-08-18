const express = require("express");
const router = express.Router();
const upload = require ('../multer');

const prodControl = require("../producto.controller");

router.get("/", prodControl.getProductos);
/*router.get("/:producto", prodControl.getProductos);*/
router.get("/dashboard/", prodControl.dashboard);
router.get("/buscar/:busqueda", prodControl.buscarProducto);
router.get("/catalogo/", prodControl.getProductosC);
router.get("/maxid/", prodControl.getMaxId);
router.post("/", upload.single('imagen'), prodControl.crearProducto);
//router.get("/:id", prodControl.getProducto);
router.put("/:id", upload.single('file'), prodControl.editProducto);
router.put("/switch/:id", prodControl.switchProd);
router.delete("/:id", prodControl.deleteProducto);
router.get("/marca/:marca", prodControl.getMarcaProducto);
module.exports = router;