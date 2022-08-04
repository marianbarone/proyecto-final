// import admin from 'firebase-admin';
import productModel from '../models/productModelFirebase';


// async function dbConnection() {
//   try{
//     const database = admin.firestore();
//     const Products = database.collection('products');
//     // return Products
//   } catch (e) {
//     console.log('Fallo la conexion con mongoose')
//   }
// }

// dbConnection()


class FirebaseProductContainer {
  constructor() {
  }

  async addProduct(data: { title: any; description: any; code: any; thumbnail: any; price: any; stock: any; }) {
    try {
      console.log('entre al try del container')
      const random = Math.random().toString(36).substring(2);
      const dateStr = Date.now().toString(36);
      const id = random + dateStr;
      let doc = productModel.doc(`${id}`);
      const response = await doc.create({
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

  async getAll(){
    try {
      const querySnapshot = await productModel.get();
      let docs = querySnapshot.docs;
      const response = docs.map((doc) => ({
          id:doc.id,
          timestamp :doc.data().timestamp,
          nombre:doc.data().nombre,
          descripcion:doc.data().descripcion,
          codigo:doc.data().codigo,
          foto:doc.data().foto,
          precio:doc.data().precio,
          stock:doc.data().stock
      }));
      return response;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getById(id: any){
    try {
      let doc = productModel.doc(`${id}`);
      const product = await doc.get();
      const response = product.data();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async updateById(id: any,data: { name: any; description: any; code: any; thumbnail: any; price: any; stock: any; },product: { name: any; description: any; code: any; thumbnail: any; price: number; stock: number; }){
    try {
      product.name = (data.name) ? data.name : product.name;
      product.description = (data.description) ? data.description : product.description;
      product.code = (data.code) ? data.code : product.code;
      product.thumbnail = (data.thumbnail) ? data.thumbnail : product.thumbnail;
      product.price = (data.price) ? Number(data.price) : Number(product.price);
      product.stock = (data.stock) ? Number(data.stock) : Number(product.stock);

      const doc = productModel.doc(`${id}`);
      const response = await doc.update({
          name:product.name,
          description:product.description,
          code:product.code,
          thumbnail:product.thumbnail,
          price:product.price,
          stock:product.stock
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteById(id: any){
    try {
      const doc = productModel.doc(`${id}`);
      const item = await doc.delete();
      console.log(item);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default FirebaseProductContainer; 