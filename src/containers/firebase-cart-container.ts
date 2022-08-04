import { FilterQuery, Types } from 'mongoose';
import cartModel from '../models/cartModelFirebase'
import productModel from '../models/productModelFirebase';
import FirebaseProductContainer from './firebase-product-container';

class FirebaseCartContainer {
    constructor() { 

    }

    // async createCart(data: { products: [any]; }) {
    //     try {
    //         console.log('entre al try del container')

    //         let firebaseProduct = new FirebaseProductContainer();
    //         let products = [];
    //         for (const product of data.products) {
    //             let p = await firebaseProduct.getById(product);
    //             // p.id = product;
    //             // products.push(p);
    //         }

    //         const random = Math.random().toString(36).substring(2);
    //         const dateStr = Date.now().toString(36);
    //         const id = random + dateStr;
    //         let doc = cartModel.doc(`${id}`);
    //         const response = await doc.create({
    //             timestamp:Date.now(),
    //             products:products
    //         });
    //         console.log(response);
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
        
    // }

    // async addProduct(id, data) {

    //     try {
    //         let firebaseProduct = new FirebaseProductContainer();
    //         let products = [];
    //         let cartData = await this.getCartById(id);

    //         cartData.productos.map((p: any) => {
    //             // products.push(p);
    //         });

    //         for (const product of data.products) {
    //             let p = await firebaseProduct.getById(product);
    //             if(p){
    //                 let isNew = true;
    //                 for (const prod of products) {
    //                     if(prod.id == p.id){
    //                         isNew= false;
    //                     }
    //                 }
    //                 if(isNew){
    //                     // p.id = product;
    //                     // products.push(p);
    //                 }
    //             }
    //         }

    //         const doc = cartModel.doc(`${id}`);
    //         const response = await doc.update({
    //             productos:products
    //         });
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // async getAllProducts(id: FilterQuery<{ timestamp: Date; products: { type?: Types.ObjectId | undefined; ref?: unknown; }[]; }>) {
    //     try {
    //         const querySnapshot = await cartModel.get();
    //         let docs = querySnapshot.docs;
    //         const response = docs.map((doc) => ({
    //             id:doc.id,
    //             timestamp:doc.data().timestamp,
    //             productos:doc.data().products
    //         }));
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //         return [];
    //     }
    // }

    // async getCartById(id) {
    //     try {
    //         let doc = cartModel.doc(`${id}`);
    //         const cart = await doc.get();
    //         const response = cart.data();
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //         return [];
    //     }
    // }


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
    //         // cartData.products.map((p) => {
    //         //     products.push(p);
    //         // });

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

