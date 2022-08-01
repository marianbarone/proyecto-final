import config from "../config";
import { Request, Response } from 'express'
import mongoose, { model } from "mongoose";
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
    const ObjectId = require('mongodb').ObjectID; 
    const o_id = new ObjectId(id);
    const product = await productModel.find({'_id': o_id});
    return product;

  }

  async getProducts() {
    try{
      const products = await productModel.find();
      return products
      // console.log(products)
      
    } catch(error){
      console.log("No existen productos", error);
    }
  }

  async deleteById(id) {
    const ObjectId = require('mongodb').ObjectID; 
    const o_id = new ObjectId(id);
    const product = await productModel.deleteOne({'_id': o_id});
    return product;

    // console.log(product)

  }

  async updateProduct(id) {
    const ObjectId = require('mongodb').ObjectID; 
    const o_id = new ObjectId(id);
    const productToUpdate = await productModel.updateOne({'_id': o_id});
    return productToUpdate;
    // console.log(productToUpdate)
  };
};

export default MongoContainer;