import { Request, Response } from 'express'
import config from "../config";
import mongoose from "mongoose";
import ProductDaoMongo from "../daos/products/productDaoMongo";
import productModel from '../models/productModel'

async function dbConnection() {
  try{
    const database = await mongoose.connect(config.mongodb.connectionString)
    console.log(database)
  } catch (e) {
    console.log('Fallo la conexion con mongoose')
  }
}

dbConnection()

class MongoContainer{
  constructor(){

  }
  // collection: any;
  // constructor(nombreCollection: any,schema: any){
  //   this.collection = mongoose.model(nombreCollection, schema);
  // }
  
  async getById(id) {
    const product = await productModel.find({_id: id},{__V:0});
    // return product;

    console.log(product)

  }

  async getProducts() {
    try{
      const products = await productModel.find();
      // return products
      console.log(products)
      
    } catch(error){
      console.log("No existen productos", error);
    }
  }

  async deleteById(id) {
    const product = await productModel.deleteOne(id);
    // return product;

    console.log(product)

  }

  async updateProduct(id) {
    const productToUpdate = await productModel.updateOne(id);
    // return productToUpdate;
    console.log(productToUpdate)
  };

  // async addProducts (req: any, res: any) {
  //   try {
  //     let data = await dbController.readFile();

  //     if (data.length === 0) {
  //       const id = 1;
  //       const { title, description, code, price, thumbnail, stock } = req.body;
  //       const timestamp = new Date().toLocaleString("es-AR");
  //       const product = { title, description, code, price, thumbnail, stock };
  //       data.push({ ...product, id, timestamp });
  //       await dbController.writeFile(data);
  //       return data
  //     } else if (data.length > 0) {
  //       const newId = data[data.length - 1].id;
  //       const id = newId + 1;
  //       const { title, description, code, price, thumbnail, stock } = req.body;
  //       const timestamp = new Date().toLocaleString("es-AR");
  //       const product = { title, description, code, price, thumbnail, stock };
  //       data.push({ ...product, id, timestamp });

  //       await dbController.writeFile(data);
  //       res.status(200).send("Producto agregado!");

  //     }
  //   } catch (err: any) {
  //     return "No se pudo agregar el producto";
  //   }
  // };
};

//     const getProducts = async (req: Request, res: Response) => {
//   try {
//     let productos = await dbController.readFile();
//     res.json(productos);
//   } catch (err: any) {
//     console.log("No existen productos", err);
//   }}

export default MongoContainer;