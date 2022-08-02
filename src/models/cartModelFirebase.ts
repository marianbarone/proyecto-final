import firebase from '../db/firebase';

const db = firebase.firestore();

const cartModel = db.collection('cart');

export default cartModel;
