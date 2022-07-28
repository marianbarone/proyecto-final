import { Request, Response } from 'express'
import config from "../config";
import mongoose, { model } from "mongoose";
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

  async addProduct(data: { title: any; description: any; code: any; thumbnail: any; price: any; stock: any; }) {
    try {
      console.log('entre al try del container')
      const response = await productModel.create({
        title: data.title,
        description: data.description,
        code: data.code,
        thumbnail: data.thumbnail,
        price: data.price,
        stock: data.stock
      })
      return response
    } catch (e) {
      console.log(e)
    }
  }
  
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
};

export default MongoContainer;