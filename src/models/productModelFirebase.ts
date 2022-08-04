import firebase from '../db/firebase';

const db = firebase.firestore();

const productModel = db.collection('products');

export default productModel;
