import firebase from '../db/firebase';

const db = firebase.firestore();

const cartModel = db.collection('carts');

export default cartModel;
