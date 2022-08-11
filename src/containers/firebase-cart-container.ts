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
            
            const cart = (await cartModel.doc(id).get()).data();

            const product = (await productModel.doc(id_prod).get()).data();

            console.log("product", product);
            console.log("cart", cart);

            if (!cart) {
                return { msg: "No hemos podido encontrar el carrito" };
            }
            if (!product) {
                return { msg: "No hemos podido encontrar el producto" };
            } else {
                const newProduct = await cartModel
                .doc(id)
                .update({ products: product });
            return newProduct
            }
            } catch (error) {
            console.log(error);
            return false;
            }
    }

    async getAllProducts(id) {
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

    async getCartById(id: string) {
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


    async deleteCart(id: string) {
        try {
            const doc = await cartModel.doc(`${id}`).delete();
            console.log('deletedcart', doc)
            return doc
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteProductById(id: any, id_prod: any) {
        try {
            const cart = (await cartModel.doc(id).get()).data();
            const product = (await productModel.doc(id_prod).get()).data();

            if(cart) {
                if(product) {
                    if(cart.products.length > 0) {
                        const otherProducts = cart.products.filter(item => item.id !== id_prod);
                        const deletedProduct = await cartModel
                        .doc(id)
                        .update({ products: product });
                        return deletedProduct
                    } else {
                        const err: any = new Error('Cart does not have products to delete!');
                        err.status = 400;
                        throw err;
                    };
                } else {
                    const err: any = new Error('Product does not exist!');
                    err.status = 400;
                    throw err;
                }
            } else {
                const err: any = new Error('Cart does not exist!');
                err.status = 400;
                throw err;
            };
        } catch (error) {
            console.log(error);
            return false;
        }
    } 
}

export default FirebaseCartContainer;

