import { FilterQuery, Types } from 'mongoose';
import cartModel from '../models/cartModel'
import productModel from '../models/productModel';

class MongoCartContainer {
    constructor() { }

    async createCart(data: { products: [any]; }) {
        try {
            console.log('entre al try del container')
            const newShoppingCart = await cartModel.create({
                products: data.products
            });
            return newShoppingCart;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async addProduct(id, data: { products: any; }) {
        const ObjectId = require('mongodb').ObjectID; 
        const o_id = new ObjectId(id);
        try {
            const selectedCart = await cartModel.findById({'_id': o_id})
            const productToAdd = await productModel.findById({'_id': o_id})

            if (selectedCart && productToAdd) {
                const productsAddtion = [...selectedCart.products, data];
                console.log('productsAddtion',productsAddtion)
                return await cartModel.updateOne(id, {products:productsAddtion})
            } else {
                console.log('Lo sentimos, no pudimos agregar el producto')
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getAllProducts(id: FilterQuery<{ timestamp: Date; products: { type?: Types.ObjectId | undefined; ref?: unknown; }[]; }>) {
        const ObjectId = require('mongodb').ObjectID; 
        const o_id = new ObjectId(id);
        try {
            const carts = await cartModel
                .find({'_id': o_id})
                .populate({ path: 'products', select: 'timestamp title description code thumbnail price stock' });
            return carts;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getCartById(id: any) {
        const ObjectId = require('mongodb').ObjectID; 
        const o_id = new ObjectId(id);
        try {
            const cart = await cartModel
                .findById({'_id': o_id})
                .populate({ path: 'products', select: 'timestamp title description code thumbnail price stock' });
            return cart;
        } catch (error) {
            console.log(error);
            return [];
        }
    }


    async deleteCartById(id: any) {
        try {
            const deleteCart = await cartModel.findByIdAndDelete(id);
            console.log(deleteCart);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteProductById(id: any, productId: any) {
        try {
            let addProduct = await cartModel.findByIdAndUpdate(id, {
                $pull: {
                    productos: productId
                }
            });
            return addProduct;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default MongoCartContainer;