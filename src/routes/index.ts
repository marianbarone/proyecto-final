import MongoContainer from "../containers/mongo-container";
// import {
//   getProducts,
//   updateProduct,
//   deleteById,
// } from "../containers/mongo-container";
// import {
// 	createCart,
// 	deleteCart,
// 	getCartProducts,
// 	addProductToCart,
// 	deleteProductFromCart,
// } from '../controllers/cart-controller';
import { Router } from "express";
import auth from "../middlewares/role";
const router = Router();

// DAOS
// import daos from '../daos/index'

//Products
router.get("/products", MongoContainer.getProducts); 
// Ejemplo route
// router.get('/products',async(req,res) => {
//     const response = await daos.ProductDao.getAll()
//     res.json(response)
// })
// router.get('/products/:id',async(req,res) => {
//     const response = await daos.ProductDao.get(req.params.id)
//     res.json(response)
// })
// router.get("/products/:id", getById);
// router.post("/products", auth, addProducts);
router.put("/products/:id", auth, MongoContainer.updateProduct);
router.delete("/products/:id", auth, MongoContainer.deleteById);

// Cart
// router.post('/cart', createCart)
// router.delete('/cart/:id', deleteCart )
// router.get('/cart/:id/products', getCartProducts)
// router.post('/cart/:id/products', addProductToCart)
// router.delete('/cart/:id/products/:id_prod', deleteProductFromCart)

export = router;

