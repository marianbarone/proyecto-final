import { FilterQuery, Types } from 'mongoose';
import cartModel from '../models/cartModelFirebase'
import productModel from '../models/productModelFirebase';
import FirebaseProductContainer from './firebase-product-container';

class FirebaseCartContainer {
    constructor() { 

    }

    async createCart() {
        try {
            let doc = cartModel.doc();
            const response = await doc.create({
                timestamp:Date.now(),
                products:[]
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }

    async addProduct(id: string, id_prod: string) {

        try {
            
            const cart = await cartModel.doc(id).get();
            // const cartData = await cart.get()
            let product = await productModel.doc(id_prod).get();
            // let productItem = await product.get()
            console.log('product',product)
            // console.log('productItem',productItem)

            console.log('cart', cart)
            const productsAddtion = [...cart.products, product];
            return await this.set(id, { products: productsAddtion })

            // console.log(response)        
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getAllProducts(id: FilterQuery<{ timestamp: Date; products: { type?: Types.ObjectId | undefined; ref?: unknown; }[]; }>) {
        try {
            const querySnapshot = await cartModel.get();
            let docs = querySnapshot.docs;
            const response = docs.map((doc) => ({
                id:doc.id,
                timestamp:doc.data().timestamp,
                products:doc.data().products
            }));
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getCartById(id) {
        try {
            let doc = await cartModel.doc(id).get();
            // const cart = await doc.get();
            const response = doc.data();
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }


    // async deleteCartById(id: any) {
    //     try {
    //         const doc = cartModel.doc(`${id}`);
    //         const item = await doc.delete();
    //         return item;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // async deleteProductById(id: any, productId: any) {
    //     try {
    //         let cartData = await this.getCartById(id);
    //         let products = [];
    //         cartData.products.map((p) => {
    //             products.push(p);
    //         });

    //         let newProducts = products.filter(p => p.id != productId);

    //         const doc = model.doc(`${id}`);
    //         const response = await doc.update({
    //             productos:newProducts
    //         });

    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }   

}

export default FirebaseCartContainer;

