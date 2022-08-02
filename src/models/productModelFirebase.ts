import firebase from '../db/firebase';

const db = firebase.firestore();

const productModel = db.collection('product');

export default productModel;
