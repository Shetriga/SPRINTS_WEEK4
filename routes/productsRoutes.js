const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers");

router.get("/", productsControllers.getProducts);

router.get("/product/:pid", productsControllers.getProductById);

router.put("/:pid", productsControllers.updateProduct);

router.post("/", productsControllers.addProduct);

router.delete("/:pid", productsControllers.deleteProduct);

module.exports = router;
